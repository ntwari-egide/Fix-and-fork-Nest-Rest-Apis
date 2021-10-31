/**
 * @author: ntwari egide
 * @description: Comment modal implementation
 */
 import * as mongoose from 'mongoose';

export const CommentSchema = new mongoose.Schema ({

    id: String,

    postId: String,

    commentMessage: String,

    numberOfLikes: Number,

    commentedAt: Date,

    commentedBy: String

})
