import { Router } from 'express';

import { env } from '../config/env';

import { AuthMiddleware } from '../middlewares/auth.middleware';

import { createServiceProxy } from '../utils/proxy';

const router = Router();

/**
 * Debug Logs
 */
router.use((req, _, next) => {
  console.log('GATEWAY REQUEST:', req.method, req.originalUrl);

  next();
});

/**
 * Auth Service
 */
router.use(
  '/auth',

  createServiceProxy(env.authService, '/api/v1/auth'),
);

/**
 * User Service
 */
router.use(
  '/users',

  AuthMiddleware.authenticate,

  createServiceProxy(env.userService, '/api/v1/users'),
);

export default router;
