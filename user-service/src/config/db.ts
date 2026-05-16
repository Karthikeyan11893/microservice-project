import mongoose from 'mongoose';
import { env } from './env';

export class Database {
  static async connect() {
    try {
      await mongoose.connect(env.MONGO_URI);
      console.log('MongoDB Connected');
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
  }
}
