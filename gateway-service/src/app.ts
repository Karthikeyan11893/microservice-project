import express from 'express';

import cors from 'cors';

import helmet from 'helmet';

import routes from './routes';

import { loggerMiddleware } from './config/logger';

import { rateLimiter } from './middlewares/rateLimit.middleware';

const app = express();

/** Security */
app.use(cors());

app.use(helmet());

/** Body Parser */
app.use(express.json());

/** Logger */
app.use(loggerMiddleware);

/** Rate Limiting */
app.use(rateLimiter);

/** Health Check */
app.get('/health', (_, res) => {
  res.json({
    success: true,
    message: 'Gateway healthy',
  });
});

/** API Routes */
app.use('/api/v1', routes);

/** 404 */
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  });
});

export default app;
