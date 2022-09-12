const getPostOptions = (body: Record<string, string>) => {
  const postOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  };
  return postOptions;
};

export const postJson = async (url: RequestInfo | URL, body: Record<string, string>) => {
  const res = await fetch(url, getPostOptions(body));
  return res;
};
