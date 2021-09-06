import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { UserDTO } from './user.dto';
import { Users } from './user.entity';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Users)
    private userRepository: Repository<Users>,
  ) {}

  findAll(): Promise<Users[]> {
    return this.userRepository.find();
  }

  findOne(id: string): Promise<Users> {
    return this.userRepository.findOne(id);
  }

  public async createUser(data: UserDTO) {
    const password = await bcrypt.hash(data.password, 10);
    await this.userRepository.save({
      ...data,
      password,
    });
  }

  public async deleteUser(id: string): Promise<DeleteResult> {
    return await this.userRepository.delete(id);
  }
}
