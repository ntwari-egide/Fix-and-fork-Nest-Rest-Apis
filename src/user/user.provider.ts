/**
 * @author: ntwari egide
 * @description: User provider implementation
 */

import { Connection } from "mongoose";
import { UserSchema } from "./entities/user.entity";

 export const catsProviders = [
    {
      provide: 'USER_MODEL',
      useFactory: (connection: Connection) => connection.model('User', UserSchema),
      inject: ['DATABASE_CONNECTION'],
    },
  ];
