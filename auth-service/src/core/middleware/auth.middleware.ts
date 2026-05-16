import { Request, Response, NextFunction } from 'express';
import { JwtUtil } from '../utils/jwt';

export interface AuthRequest extends Request {
  user?: any;
}

export class AuthMiddleware {
  static authenticate(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const authHeader = req.headers.authorization;

      if (!authHeader?.startsWith('Bearer ')) {
        return res.status(401).json({
          message: 'Unauthorized',
        });
      }

      const token = authHeader.split(' ')[1];

      const decoded = JwtUtil.verifyAccessToken(token);

      req.user = decoded;

      next();
    } catch (error) {
      return res.status(401).json({
        message: 'Invalid Token',
      });
    }
  }
}
