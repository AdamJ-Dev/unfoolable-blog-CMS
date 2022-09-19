export const setCache = (value: string | null) => {
  return localStorage.setItem('cache', value || '');
};

export const getCache = () => {
  return localStorage.getItem('cache');
};

export const setLatest = (value: string | null) => {
  return localStorage.setItem('latest', value || '');
};

export const getLatest = () => {
  return localStorage.getItem('latest');
};

export const clearStorage = () => {
  localStorage.clear();
};
