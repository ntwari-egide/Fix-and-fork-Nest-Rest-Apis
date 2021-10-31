import { PartialType } from '@nestjs/swagger';
import { CreateCommentReplyDto } from './create-comment-reply.dto';

export class UpdateCommentReplyDto extends PartialType(CreateCommentReplyDto) {}
