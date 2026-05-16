import dotenv from 'dotenv';

dotenv.config();

export const env = {
  PORT: process.env.PORT || 9000,
  jwtSecret: process.env.JWT_SECRET || '',
  authService: process.env.AUTH_SERVICE || '',
  userService: process.env.USER_SERVICE || '',
};
