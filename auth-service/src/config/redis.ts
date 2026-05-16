import Redis from 'ioredis';
import { logger } from './logger';

class RedisClient {
  private static client: Redis | null = null;

  static connect(redisUrl: string) {
    if (this.client) return this.client;

    this.client = new Redis(redisUrl, {
      retryStrategy: (times) => {
        // reconnect delay (max 5s)
        return Math.min(times * 100, 5000);
      },
    });

    this.client.on('connect', () => {
      logger.info('Redis connecting...');
    });

    this.client.on('ready', () => {
      logger.info('Redis connected successfully');
    });

    this.client.on('error', (err) => {
      logger.error('Redis connection error:', err);
    });

    this.client.on('reconnecting', (delay: number) => {
      logger.warn(`Redis reconnecting in ${delay}ms`);
    });

    this.client.on('end', () => {
      logger.warn('Redis connection closed');
    });

    return this.client;
  }

  static getClient(): Redis {
    if (!this.client) {
      throw new Error(
        'Redis not initialized. Call RedisClient.connect() first.',
      );
    }
    return this.client;
  }
}

export default RedisClient;
