import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
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
  @HttpCode(HttpStatus.CREATED)
  public async createUser(@Body() body: UserDTO) {
    return await this.userService.createUser(body);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  public async deleteUser(@Param() params): Promise<DeleteResult> {
    const user_id = params.id;
    return this.userService.deleteUser(user_id);
  }
}
