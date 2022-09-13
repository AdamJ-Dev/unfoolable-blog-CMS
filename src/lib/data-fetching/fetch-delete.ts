const getDeleteHeaders = (auth?: string) => {
  const headers: Record<string, string> = {};
  if (auth) headers['Authorization'] = auth;
  return headers;
};

const getDeleteOptions = (headers: Record<string, string>) => {
  const deleteOptions = { method: 'DELETE', headers };
  return deleteOptions;
};

export const fetchDelete = async (url: RequestInfo | URL, auth?: string) => {
  const res = await fetch(url, getDeleteOptions(getDeleteHeaders(auth)));
  return res;
};
