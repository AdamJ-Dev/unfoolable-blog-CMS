import api from './api.json';
import { getAbsolute, parseIdRoute } from './helpers';

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
  return getUrl(parseIdRoute(api.routes.auth.findUser, id), getAbsolute(options));
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
  return getUrl(parseIdRoute(api.routes.blogs.findBlog, id), getAbsolute(options));
};

export const getCreateBlogUrl = (options?: { absolute: boolean }) => {
  return getUrl(api.routes.blogs.createBlog, getAbsolute(options));
};

export const getUpdateBlogUrl = (id: string, options?: { absolute: boolean }) => {
  return getUrl(parseIdRoute(api.routes.blogs.updateBlog, id), getAbsolute(options));
};

export const getDeleteBlogUrl = (id: string, options?: { absolute: boolean }) => {
  return getUrl(parseIdRoute(api.routes.blogs.deleteBlog, id), getAbsolute(options));
};
