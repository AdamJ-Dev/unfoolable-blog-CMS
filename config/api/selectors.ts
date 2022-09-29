import api from './api.json';
import { getAbsolute, applyIds } from '../../src/app/utility/routing/parse-routes';

// base urls:
export const getApiBaseDevUrl = () => {
  return api.baseDevUrl;
};

export const getApiBaseProdUrl = () => {
  return api.baseProdUrl;
};

export const getApiBaseUrl = () => {
  switch (process.env.NODE_ENV) {
    case 'production':
      return getApiBaseProdUrl();
    default:
      return getApiBaseDevUrl();
  }
};

// url constructors:

export const getUrl = (route: string) => {
  return `${getApiBaseUrl()}${route}`;
};

// auth routes:
export const getFindUserUrl = (id: string) => {
  return getUrl(applyIds(api.routes.auth.findUser, [[':id', id]]));
};

export const getLoginUrl = () => {
  return getUrl(api.routes.auth.login);
};

export const getSignupUrl = () => {
  return getUrl(api.routes.auth.signup);
};

// blog routes:
export const getFindAllBlogsUrl = () => {
  return getUrl(api.routes.blogs.findAllBlogs);
};

export const getFindPublishedBlogsUrl = () => {
  return getUrl(api.routes.blogs.findPublishedBlogs);
};

export const getFindBlogDraftsUrl = () => {
  return getUrl(api.routes.blogs.findBlogDrafts);
};

export const getFindBlogTags = () => {
  return getUrl(api.routes.blogs.findBlogTags);
};

export const getFindBlogUrl = (path: string) => {
  return getUrl(applyIds(api.routes.blogs.findBlog, [[':path', path]]));
};

export const getCreateBlogUrl = () => {
  return getUrl(api.routes.blogs.createBlog);
};

export const getUpdateBlogUrl = (id: string) => {
  return getUrl(applyIds(api.routes.blogs.updateBlog, [[':id', id]]));
};

export const getDeleteBlogUrl = (id: string) => {
  return getUrl(applyIds(api.routes.blogs.deleteBlog, [[':id', id]]));
};

// comments routes
export const getFindAllCommentsUrl = () => {
  return getUrl(api.routes.comments.findAllComments);
};

export const getFindBlogsCommentsUrl = (blogId: string) => {
  return getUrl(applyIds(api.routes.comments.findBlogsComments, [[':blog_id', blogId]]));
};

export const getFindComment = (id: string) => {
  return getUrl(applyIds(api.routes.comments.findComment, [[':id', id]]));
};

export const getCreateCommentUrl = () => {
  return getUrl(api.routes.comments.createComment);
};

export const getCreateUserCommentUrl = () => {
  return getUrl(api.routes.comments.createUserComment);
};

export const getCreateAdminCommentUrl = () => {
  return getUrl(api.routes.comments.createAdminComment);
};

export const getUpdateCommentUrl = (id: string) => {
  return getUrl(applyIds(api.routes.comments.updateComment, [[':id', id]]));
};

export const getDeleteCommentUrl = (id: string) => {
  return getUrl(applyIds(api.routes.comments.deleteComment, [[':id', id]]));
};
