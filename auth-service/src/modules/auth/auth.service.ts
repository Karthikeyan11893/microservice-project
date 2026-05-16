import { AuthRepository } from './auth.repository';
import { HashUtil } from '../../core/utils/hash';
import { JwtUtil } from '../../core/utils/jwt';
import { ApiError } from '../../core/errors/ApiError';
import RedisClient from '../../config/redis';

export class AuthService {
  private authRepository: AuthRepository;

  constructor() {
    this.authRepository = new AuthRepository();
  }

  async register(email: string, password: string) {
    const existingUser = await this.authRepository.findByEmail(email);

    if (existingUser) {
      throw new ApiError(400, 'User already exists');
    }

    const hashedPassword = await HashUtil.hash(password);

    const user = await this.authRepository.createUser({
      email,
      password: hashedPassword,
    });

    return user;
  }

  async login(email: string, password: string) {
    const user = await this.authRepository.findByEmail(email);

    if (!user) {
      throw new ApiError(401, 'Invalid credentials');
    }

    const isPasswordValid = await HashUtil.compare(password, user.password);

    if (!isPasswordValid) {
      throw new ApiError(401, 'Invalid credentials');
    }

    const payload = {
      id: user._id,
      role: user.role,
    };

    return {
      accessToken: JwtUtil.generateAccessToken(payload),

      refreshToken: JwtUtil.generateRefreshToken(payload),

      user,
    };
  }

  async refresh(refreshToken: string) {
    if (!refreshToken) {
      throw new ApiError(401, 'Refresh token required');
    }

    const decoded: any = JwtUtil.verifyRefreshToken(refreshToken);

    const redis = RedisClient.getClient();

    const storedToken = await redis.get(`refresh:${decoded.id}`);

    if (storedToken !== refreshToken) {
      throw new ApiError(401, 'Invalid refresh token');
    }

    const payload = {
      id: decoded.id,
      role: decoded.role,
    };

    const newAccessToken = JwtUtil.generateAccessToken(payload);

    const newRefreshToken = JwtUtil.generateRefreshToken(payload);

    await redis.set(
      `refresh:${decoded.id}`,
      newRefreshToken,
      'EX',
      60 * 60 * 24 * 7,
    );

    return {
      accessToken: newAccessToken,
      refreshToken: newRefreshToken,
    };
  }
}
