/**
 * @author: ntwari egide
 * @description: User modal implementation
 */

import { Exclude } from 'class-transformer';
import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  id: Number,

  role: Number,

  email: String,

  username: String,

  password: String,

  joinedAt: Date,

  updatedAt: Date


});