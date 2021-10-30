/**
 * @author: ntwari egide
 * @description: Post interface implementation
 */


 import { Document } from 'mongoose';

 export interface Post extends Document {

    postTypes : [String] ,

    coverImageUrl: String,

    postTitle: String,

    postDescription: String,

    contentMdFileUrl: String,

    githubLinkUrl: String,

    totalForks: Number,

    totalLikes: Number,

    totalViews: Number,

    PostedBy: String,

    createdAt: Date,

    updatedAt: Date
    
 }