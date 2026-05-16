import { Request, Response, NextFunction } from 'express';

import { AuthService } from './auth.service';

import { ResponseUtil } from '../../core/utils/response';

export class AuthController {
  private authService: AuthService;

  constructor() {
    this.authService = new AuthService();
  }

  register = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, password } = req.body;

      const user = await this.authService.register(email, password);

      return ResponseUtil.created(res, user);
    } catch (error) {
      next(error);
    }
  };

  login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, password } = req.body;

      const data = await this.authService.login(email, password);

      return ResponseUtil.success(res, data);
    } catch (error) {
      next(error);
    }
  };

  refresh = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { refreshToken } = req.body;

      const data = await this.authService.refresh(refreshToken);

      return ResponseUtil.success(res, data);
    } catch (error) {
      next(error);
    }
  };
}
