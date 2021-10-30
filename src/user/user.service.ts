/**
 * @author: ntwari egide
 * @description: User service implementation
 */

import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.interface';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {

  constructor(  
    @Inject('USER_MODEL')
    private userModal: Model<User>
  ){}

  async create(createUserDto: CreateUserDto): Promise<User> {

    const saltOrRounds = 10;

    const password = 'random_password';

    let createUser = new this.userModal(createUserDto)

    createUser.password =  await bcrypt.hash(createUser.password, saltOrRounds);

    return createUser.save()
  }

  async findAll(): Promise<User[]> {
    return this.userModal.find().exec()
  }

  async findOne(id: number): Promise<User> {
    return null
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
