import { CustomForm, DBObjId } from '../general';

type CommentAuthor = {
  name: string;
  isUser: boolean;
  isAdmin: boolean;
};

type CommentCore = {
  author: CommentAuthor;
  body: string;
  pinned: boolean;
  createdAt: string;
  updatedAt: string;
};

type DBCommentIds = {
  _id: DBObjId;
  blogId: DBObjId;
  parentId?: DBObjId;
};

type ClientCommentIds = {
  id: string;
  blogId: string;
  parentId?: string;
};

export type DBComment = CommentCore & DBCommentIds;
export type BlogComment = CommentCore & ClientCommentIds;

export type NewComment = {
  author: CommentAuthor;
  body: string;
  blogId: string;
  parentId?: string;
};

export type NewCommentForm = CustomForm<'author' | 'body'>;
