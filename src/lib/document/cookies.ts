export const getCookies = () => {
  return document.cookie.split('; ');
};

export const selectCookie = (key: string, cookies: string[]) => {
  return cookies.find((cookie) => cookie.startsWith(`${key}=`));
};

export const getCookieValue = (cookie: string) => {
  const utf8Value = cookie.split('=')[1];
  return decodeURIComponent(utf8Value);
};

export const setCookie = (key: string, value: string) => {
  const cookie = `${key}=${encodeURIComponent(value)}`;
  document.cookie = cookie;
};

export const deleteCookie = (key: string, path?: string) => {
  const selector = `${key}=`;
  const expirySpec = '; expires=Thu, 01 Jan 1970 00:00:01 GMT';
  const pathSpec = path ? `; path=${path}` : '';
  document.cookie = selector + expirySpec + pathSpec;
};
