import api from './api.json';
import { getAbsolute, applyIds } from './helpers/parse-routes';

// base urls:
export const getApiBaseDevUrl = () => {
  return api.baseDevUrl;
};

export const getApiProxyPrefix = () => {
  return api.baseProxy;
};

export const getApiBaseUrl = () => {
  return process.env.API_URL || getApiBaseDevUrl();
};

// url constructors:
export const getAbsoluteRouteUrl = (route: string) => {
  return `${getApiBaseUrl()}${route}`;
};

export const getProxyRouteUrl = (route: string) => {
  return `${getApiProxyPrefix()}${route}`;
};

export const getUrl = (route: string, absolute: boolean) => {
  return absolute ? getAbsoluteRouteUrl(route) : getProxyRouteUrl(route);
};

// auth routes:
export const getFindUserUrl = (id: string, options?: { absolute: boolean }) => {
  return getUrl(applyIds(api.routes.auth.findUser, [[':id', id]]), getAbsolute(options));
};

export const getLoginUrl = (options?: { absolute: boolean }) => {
  return getUrl(api.routes.auth.login, getAbsolute(options));
};

export const getSignupUrl = (options?: { absolute: boolean }) => {
  return getUrl(api.routes.auth.signup, getAbsolute(options));
};

// blog routes:
export const getFindAllBlogsUrl = (options?: { absolute: boolean }) => {
  return getUrl(api.routes.blogs.findAllBlogs, getAbsolute(options));
};

export const getFindBlogUrl = (id: string, options?: { absolute: boolean }) => {
  return getUrl(applyIds(api.routes.blogs.findBlog, [[':id', id]]), getAbsolute(options));
};

export const getCreateBlogUrl = (options?: { absolute: boolean }) => {
  return getUrl(api.routes.blogs.createBlog, getAbsolute(options));
};

export const getUpdateBlogUrl = (id: string, options?: { absolute: boolean }) => {
  return getUrl(applyIds(api.routes.blogs.updateBlog, [[':id', id]]), getAbsolute(options));
};

export const getDeleteBlogUrl = (id: string, options?: { absolute: boolean }) => {
  return getUrl(applyIds(api.routes.blogs.deleteBlog, [[':id', id]]), getAbsolute(options));
};

// comments routes
export const getFindAllCommentsUrl = (options?: { absolute: boolean }) => {
  return getUrl(api.routes.comments.findAllComments, getAbsolute(options));
};

export const getFindBlogsCommentsUrl = (blogId: string, options?: { absolute: boolean }) => {
  return getUrl(
    applyIds(api.routes.comments.findBlogsComments, [[':blog_id', blogId]]),
    getAbsolute(options)
  );
};

export const getFindComment = (id: string, options?: { absolute: boolean }) => {
  return getUrl(applyIds(api.routes.comments.findComment, [[':id', id]]), getAbsolute(options));
};

export const getCreateCommentUrl = (options?: { absolute: boolean }) => {
  return getUrl(api.routes.comments.createComment, getAbsolute(options));
};

export const getCreateUserCommentUrl = (userId: string, options?: { absolute: boolean }) => {
  return getUrl(
    applyIds(api.routes.comments.createUserComment, [[':user_id', userId]]),
    getAbsolute(options)
  );
};

export const getCreateAdminCommentUrl = (userId: string, options?: { absolute: boolean }) => {
  return getUrl(
    applyIds(api.routes.comments.createAdminComment, [[':user_id', userId]]),
    getAbsolute(options)
  );
};

export const getUpdateCommentUrl = (userId: string, commentId: string, options?: { absolute: boolean }) => {
  return getUrl(
    applyIds(api.routes.comments.updateComment, [
      [':user_id', userId],
      [':comment_id', commentId],
    ]),
    getAbsolute(options)
  );
};

export const getDeleteCommentUrl = (id: string, options?: { absolute: boolean }) => {
  return getUrl(applyIds(api.routes.comments.deleteComment, [[':id', id]]), getAbsolute(options));
};
