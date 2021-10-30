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
import { UserNotFoundException } from 'src/exceptions/UserNotFoundException';

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

  checkUserExistance = (id: String) : User => {
    let user : any
    try {
      user = this.userModal.findById(id).exec()
    } catch (error) {
      throw new UserNotFoundException('User with id '+id+ ' is not found')
    }

    return user
  }

  async findOne(id: String): Promise<User> {
    return this.checkUserExistance(id)
  }

  async update(id: String, updateUserDto: UpdateUserDto): Promise<User> {
    
    this.checkUserExistance(id)

    return this.userModal.findByIdAndUpdate(id,updateUserDto).exec()

  }

  async remove(id: String) {
    
    this.checkUserExistance(id)

    return this.userModal.findByIdAndRemove(id).exec()

  }
}
