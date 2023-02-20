import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() userDto: CreateUserDto) {
    return this.userService.create(userDto);
  }
}

export class CreateUserDto {
  readonly name: string;
  readonly email: string;
  readonly phone: string;
  readonly password: string;
  readonly dob: string;
  readonly city: string;
}
