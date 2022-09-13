export const parseIdRoute = (route: string, id: string) => {
  return route.replace(':id', id);
};

export const getAbsolute = (options?: { absolute: boolean }) => {
  return Boolean(options?.absolute);
};
