import { DBObjId } from '../general';

type BlogCore = {
  title: string;
  path: string;
  body: string;
  tags: string[];
  createdAt: string;
  updatedAtDate: string;
};

type DBBlogIds = {
  _id: DBObjId;
  blogId: DBObjId;
  parentId?: DBObjId;
};

type ClientBlogIds = {
  id: string;
  blogId: string;
  parentId?: string;
};

export type DBBlog = BlogCore & DBBlogIds;
export type Blog = BlogCore & ClientBlogIds;

type FetchBlogSuccess = {
  blog: DBBlog;
  error: null;
};

type FetchBlogError = {
  blog: undefined;
  error: string;
};

export type FetchBlogRes = FetchBlogSuccess | FetchBlogError;
