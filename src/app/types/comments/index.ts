import { DBObjId } from '../general';

type CommentCore = {
  author: {
    name: string;
    isUser: boolean;
    isAdmin: boolean;
  };
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
