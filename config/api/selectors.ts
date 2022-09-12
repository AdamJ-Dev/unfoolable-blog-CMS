import api from './api.json';

export const getApiProxyPrefix = () => {
  return api.baseProxy;
};

export const getProxyRouteUrl = (route: string) => {
  return `${getApiProxyPrefix()}${route}`;
};

export const getFindUserUrl = (id: string) => {
  const template = api.routes.findUser;
  const idRoute = template.replace(':id', id);
  return getProxyRouteUrl(idRoute);
};

export const getLoginUrl = () => {
  return getProxyRouteUrl(api.routes.login);
};

export const getSignupUrl = () => {
  return getProxyRouteUrl(api.routes.signup);
};
