export type Blog = {
  _id: string;
  title: string;
  path: string;
  body: string;
  createdAt: string;
  updatedAtDate: string;
};

type FetchBlogSuccess = {
  blog: Blog;
  error: null;
};

type FetchBlogError = {
  blog: undefined;
  error: string;
};

export type FetchBlogRes = FetchBlogSuccess | FetchBlogError;
