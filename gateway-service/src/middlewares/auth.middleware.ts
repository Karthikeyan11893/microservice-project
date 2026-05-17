import { Request, Response, NextFunction } from 'express';

import jwt from 'jsonwebtoken';

import { env } from '../config/env';

import { ResponseUtil } from '../utils/response';

export interface AuthRequest extends Request {
  user?: any;
}

export class AuthMiddleware {
  static authenticate(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const authHeader = req.headers.authorization;

      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return ResponseUtil.error(res, 'Unauthorized', 401);
      }

      const token = authHeader.split(' ')[1];

      const decoded = jwt.verify(token, env.jwtSecret);

      req.user = decoded;

      next();
    } catch (error) {
      return ResponseUtil.error(res, 'Invalid token', 401);
    }
  }
}
