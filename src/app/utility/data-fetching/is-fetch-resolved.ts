export const isFetchResolved = (data: unknown, error: unknown) => {
  return Boolean(data || error);
};
