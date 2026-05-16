import { Request, Response, NextFunction } from 'express';

import jwt from 'jsonwebtoken';

import { env } from '../../config/env';

import { ResponseUtil } from '../utils/response';

export interface AuthRequest extends Request {
  user?: any;
}

export class AuthMiddleware {
  static authenticate(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const authHeader = req.headers.authorization;

      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return ResponseUtil.success(res, null, 'Unauthorized');
      }

      const token = authHeader.split(' ')[1];

      const decoded = jwt.verify(token, env.JWT_ACCESS_SECRET);

      req.user = decoded;

      next();
    } catch (error) {
      return ResponseUtil.success(res, null, 'Invalid token');
    }
  }
}
