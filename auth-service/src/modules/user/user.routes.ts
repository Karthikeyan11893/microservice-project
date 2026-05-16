import { Router } from 'express';

import { UserController } from './user.controller';

import { AuthMiddleware } from '../../core/middleware/auth.middleware';

import { AuthorizationMiddleware } from '../rbac/authorize.middleware';

import { ROLES } from '../../shared/constants';

const router = Router();

const controller = new UserController();

/**
 * @swagger
 * /api/v1/users:
 *   get:
 *     summary: Get all users
 *     tags:
 *       - Users
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Users fetched successfully
 */
router.get(
  '/',

  AuthMiddleware.authenticate,

  AuthorizationMiddleware.authorize(ROLES.ADMIN),

  controller.getUsers,
);

/**
 * @swagger
 * /api/v1/users/{id}:
 *   get:
 *     summary: Get user by id
 *     tags:
 *       - Users
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User fetched successfully
 */
router.get(
  '/:id',

  AuthMiddleware.authenticate,

  controller.getUser,
);

export default router;
