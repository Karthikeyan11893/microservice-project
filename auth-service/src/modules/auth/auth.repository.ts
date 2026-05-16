import AuthModel from './auth.model';

export class AuthRepository {
  async findByEmail(email: string) {
    return AuthModel.findOne({ email });
  }

  async createUser(data: any) {
    return AuthModel.create(data);
  }

  async findById(id: string) {
    return AuthModel.findById(id);
  }
}
