import { Request, Response, NextFunction } from 'express';

import { UserService } from './user.service';

import { ResponseUtil } from '../../core/utils/response';

export class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  getUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const users = await this.userService.getUsers();

      return ResponseUtil.success(res, users);
    } catch (error) {
      next(error);
    }
  };

  getUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await this.userService.getUser(req.params.id as string);

      return ResponseUtil.success(res, user);
    } catch (error) {
      next(error);
    }
  };
}
