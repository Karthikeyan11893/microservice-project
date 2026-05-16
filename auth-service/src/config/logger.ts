import winston from 'winston';

const loggerFormat = winston.format.combine(
  winston.format.timestamp(),

  winston.format.printf(({ level, message, timestamp }) => {
    return `${timestamp} ${level}: ${message}`;
  }),
);

export const logger = winston.createLogger({
  level: 'info',

  format: loggerFormat,

  transports: [
    new winston.transports.Console(),

    new winston.transports.File({
      filename: 'logs/error.log',
      level: 'error',
    }),

    new winston.transports.File({
      filename: 'logs/combined.log',
    }),
  ],
});
