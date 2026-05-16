import UserModel from './user.model';

export class UserRepository {
  async findAll() {
    return UserModel.find().select('-password');
  }

  async findById(id: string) {
    return UserModel.findById(id).select('-password');
  }

  async findByEmail(email: string) {
    return UserModel.findOne({ email });
  }

  async create(data: any) {
    return UserModel.create(data);
  }
}
