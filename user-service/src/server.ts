import app from './app';
import { Database } from './shared/database';
import { logger } from './config/logger';
import { env } from './config/env';

const PORT = env.PORT;

async function bootstrap() {
  try {
    // Connect DB
    // await Database.connect();

    // Start server
    app.listen(PORT, () => {
      logger.info(`Server running on port ${PORT}`);
      logger.info(`Swagger UI: http://localhost:${PORT}/docs`);
      logger.info(`API Base URL: http://localhost:${PORT}/api/v1`);
    });
  } catch (error: any) {
    logger.error('Server failed to start:', error.message);
    process.exit(1);
  }
}

bootstrap();
