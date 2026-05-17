import { Router } from 'express';

import { createProxyMiddleware } from 'http-proxy-middleware';

import { env } from '../config/env';

import { AuthMiddleware } from '../middlewares/auth.middleware';

const router = Router();

/** Auth Service Proxy */
router.use(
  '/auth',

  createProxyMiddleware({
    target: env.authService,

    changeOrigin: true,

    // pathRewrite: {
    //   '^/auth': '/api/v1/auth',
    // },
  }),
);

/** User Service Proxy */
router.use(
  '/users',

  AuthMiddleware.authenticate,

  createProxyMiddleware({
    target: env.userService,

    changeOrigin: true,

    // pathRewrite: {
    //   '^/users': '/api/v1/users',
    // },
  }),
);

export default router;
