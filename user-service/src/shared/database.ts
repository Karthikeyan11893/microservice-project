import mongoose from 'mongoose';

import { logger } from '../config/logger';

export class Database {
  static async connect() {
    try {
      await mongoose.connect(process.env.MONGO_URI!);

      logger.info('MongoDB Connected');
    } catch (error: any) {
      logger.error(error.message);

      process.exit(1);
    }
  }
}
