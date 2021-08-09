import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { UserDTO } from './user.dto';
import { Users } from './user.entity';

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

  createUser(data: UserDTO): Promise<UserDTO> {
    return this.userRepository.save(data);
  }

  deleteUser(id: string): Promise<DeleteResult> {
    return this.userRepository.delete(id);
  }
}
