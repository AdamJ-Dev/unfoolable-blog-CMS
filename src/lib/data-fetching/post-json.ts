const getPostHeaders = (auth?: string) => {
  const headers: Record<string, string> = { 'Content-Type': 'application/json' };
  if (auth) headers['Authorization'] = auth;
  return headers;
};

const getPostOptions = (headers: Record<string, string>, body: Record<string, string>, method = 'POST') => {
  const postOptions = {
    method,
    headers,
    body: JSON.stringify(body),
  };
  return postOptions;
};

export const postJson = async (url: RequestInfo | URL, body: Record<string, string>, auth?: string) => {
  const res = await fetch(url, getPostOptions(getPostHeaders(auth), body));
  return res;
};

export const putJson = async (url: RequestInfo | URL, body: Record<string, string>, auth?: string) => {
  const res = await fetch(url, getPostOptions(getPostHeaders(auth), body, 'PUT'));
  return res;
};
