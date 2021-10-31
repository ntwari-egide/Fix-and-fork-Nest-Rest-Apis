/**
 * @author: ntwari egide
 * @description: Comment reply modal implementation
 */
 import * as mongoose from 'mongoose';

export const CommentReply = new  mongoose.Schema({

    id: String,

    commentId: String,

    replyMessage: String,

    repliedAt: Date,

    repliedBy: String

})
