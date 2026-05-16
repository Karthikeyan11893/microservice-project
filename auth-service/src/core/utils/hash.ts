import bcrypt from 'bcryptjs';

export class HashUtil {
  static async hash(password: string) {
    return bcrypt.hash(password, 10);
  }

  static async compare(password: string, hashedPassword: string) {
    return bcrypt.compare(password, hashedPassword);
  }
}
