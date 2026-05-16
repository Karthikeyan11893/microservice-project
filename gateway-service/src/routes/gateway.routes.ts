import { Router } from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

import { env } from '../config/env';
import { verifyToken } from '../middlewares/auth.middleware';

const router = Router();

/* Auth Service */
router.use(
  '/auth',
  createProxyMiddleware({
    target: env.authService,
    changeOrigin: true,
    pathRewrite: {
      '^/auth': '',
    },
  }),
);

/* User Service (Protected) */
router.use(
  '/users',
  verifyToken,
  createProxyMiddleware({
    target: env.userService,
    changeOrigin: true,
    pathRewrite: {
      '^/users': '',
    },
  }),
);

export default router;
