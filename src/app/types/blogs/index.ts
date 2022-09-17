import { CustomForm, DBObjId } from '../general';

type BlogCore = {
  title: string;
  path: string;
  body: string;
  tags: string[];
  isDraft: boolean;
  createdAt: string;
  updatedAtDate: string;
};

type DBBlogIds = {
  _id: DBObjId;
};

type ClientBlogIds = {
  id: string;
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

export type NewBlog = {
  title: string;
  path: string;
  body: string;
  tags: string[];
  isDraft: boolean;
};

export type NewDraftForm = CustomForm<'title'>;
