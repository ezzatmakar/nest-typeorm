import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../../typeorm/entities/User';
import { Repository } from 'typeorm';
import { createUserParams } from 'src/types/types';
import { fetchUsersDataDto } from 'src/users/dtos/fetchUsersData.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) { }

  fetchUsers() {
    return this.userRepository.find({
      select: {
        id: true,
        username: true,
        email: true
      },
      order: {
        createdAt: 'DESC'
      }
    });
  }

  createUser(userData: createUserParams) {
    const newUser = this.userRepository.create({
      ...userData
    });
    return this.userRepository.save(newUser);
  }
}
