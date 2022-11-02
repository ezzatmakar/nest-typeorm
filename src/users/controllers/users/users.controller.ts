import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { UsersService } from '../../services/users/users.service';
import { CreateUserDto } from '../../dtos/CreateUser.dto';
import { fetchUsersDataDto } from 'src/users/dtos/fetchUsersData.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) { }
  @Get()
  fetchUsers() {
    return this.usersService.fetchUsers();
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }
}
