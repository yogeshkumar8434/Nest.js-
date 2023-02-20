import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './user.controller';

@Injectable()
export class UserService {
  async create(createUserDto: CreateUserDto) {
    // Here you can add your own implementation for creating a user
    // This is just a sample implementation to illustrate the concept
    return {
      id: 1,
      ...createUserDto,
    };
  }
}
