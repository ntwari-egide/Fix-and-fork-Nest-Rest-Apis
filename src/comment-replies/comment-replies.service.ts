import { Injectable } from '@nestjs/common';
import { CreateCommentReplyDto } from './dto/create-comment-reply.dto';
import { UpdateCommentReplyDto } from './dto/update-comment-reply.dto';

@Injectable()
export class CommentRepliesService {
  create(createCommentReplyDto: CreateCommentReplyDto) {
    return 'This action adds a new commentReply';
  }

  findAll() {
    return `This action returns all commentReplies`;
  }

  findOne(id: number) {
    return `This action returns a #${id} commentReply`;
  }

  update(id: number, updateCommentReplyDto: UpdateCommentReplyDto) {
    return `This action updates a #${id} commentReply`;
  }

  remove(id: number) {
    return `This action removes a #${id} commentReply`;
  }
}
