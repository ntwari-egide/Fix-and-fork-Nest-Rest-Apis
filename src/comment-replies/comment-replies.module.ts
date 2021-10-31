import { Module } from '@nestjs/common';
import { CommentRepliesService } from './comment-replies.service';
import { CommentRepliesController } from './comment-replies.controller';

@Module({
  controllers: [CommentRepliesController],
  providers: [CommentRepliesService]
})
export class CommentRepliesModule {}
