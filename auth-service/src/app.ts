import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import swaggerUi from 'swagger-ui-express';

import { swaggerSpec } from './config/swagger';

import routes from './routes';

import { rateLimiter } from './core/middleware/rateLimit.middleware';

import { errorHandler } from './core/errors/errorHandler';

const app = express();

/** Security */
app.use(cors());
app.use(helmet());

/** Body Parser */
app.use(express.json());

/** Rate Limiting */
app.use(rateLimiter);

/** Swagger Docs */
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/** API Routes */
app.use('/api/v1', routes);

/** Health Check */
app.get('/health', (_, res) => {
  res.status(200).json({
    success: true,
    message: 'Server is healthy',
  });
});

/** 404 Handler */
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  });
});

/** Global Error Handler */
app.use(errorHandler);

export default app;
