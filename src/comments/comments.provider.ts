/**
 * @author: ntwari egide
 * @description: Comments provider implementation
 */

 import { Connection } from "mongoose";
import { CommentSchema } from "./entities/comment.entity";
 
  export const usersProvider = [
     {
       provide: 'COMMENT_MODEL',
       useFactory: (connection: Connection) => connection.model('Comments', CommentSchema),
       inject: ['DATABASE_CONNECTION'],
     },
   ];
 