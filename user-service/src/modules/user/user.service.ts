import { UserRepository } from './user.repository';

export class UserService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async getUsers() {
    return this.userRepository.findAll();
  }

  async getUser(id: string) {
    return this.userRepository.findById(id);
  }
}
