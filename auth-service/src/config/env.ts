import dotenv from 'dotenv';

dotenv.config();

export const env = {
  PORT: Number(process.env.PORT) || 9000,

  MONGO_URI: process.env.MONGO_URI!,
  REDIS_URL: process.env.REDIS_URL!,

  JWT_ACCESS_SECRET: process.env.JWT_ACCESS_SECRET!,
  JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET!,

  ACCESS_TOKEN_EXPIRES: '15m' as const,
  REFRESH_TOKEN_EXPIRES: '7d' as const,
};
