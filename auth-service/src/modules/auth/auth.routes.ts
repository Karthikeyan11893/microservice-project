import { Router } from 'express';

import { AuthController } from './auth.controller';

import { validate } from '../../core/middleware/validate.middleware';

import { loginSchema, registerSchema } from './auth.validation';

import { AuthMiddleware } from '../../core/middleware/auth.middleware';

const router = Router();

const controller = new AuthController();

/**
 * @swagger
 * /api/v1/auth/signup:
 *   post:
 *     summary: Register new user
 *     tags:
 *       - Auth
 *     responses:
 *       201:
 *         description: User created
 */
router.post('/signup', validate(registerSchema), controller.register);

/**
 * @swagger
 * /api/v1/auth/login:
 *   post:
 *     summary: Login user
 *     tags:
 *       - Auth
 *     responses:
 *       200:
 *         description: Login successful
 */
router.post('/login', validate(loginSchema), controller.login);

/**
 * @swagger
 * /api/v1/auth/refresh:
 *   post:
 *     summary: Refresh access token
 *     tags:
 *       - Auth
 *     responses:
 *       200:
 *         description: Token refreshed
 */
router.post('/refresh', controller.refresh);

/**
 * @swagger
 * /api/v1/auth/logout:
 *   post:
 *     summary: Logout user
 *     tags:
 *       - Auth
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Logged out successfully
 */
// router.post(
//   '/logout',

//   AuthMiddleware.authenticate,

//   controller.logout,
// );

export default router;
