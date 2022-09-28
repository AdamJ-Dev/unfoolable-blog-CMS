export const getEmptyPromise = (): (() => Promise<void>) => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  return () => new Promise(() => {});
};
