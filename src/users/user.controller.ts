import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { DeleteResult } from 'typeorm';
import { UserDTO } from './user.dto';
import { Users } from './user.entity';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  getUsers(): Promise<UserDTO[]> {
    return this.userService.findAll();
  }
  @Get(':id')
  findOne(@Param() params): Promise<Users> {
    return this.userService.findOne(params.id);
  }

  @Post()
  createUser(@Body() body): Promise<UserDTO> {
    return this.userService.createUser(body);
  }

  @Delete(':id')
  deleteUser(@Param() params): Promise<DeleteResult> {
    return this.userService.deleteUser(params.id);
  }
}
