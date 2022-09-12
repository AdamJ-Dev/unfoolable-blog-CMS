export const isJsonString = (str: string) => {
  try {
    JSON.parse(str);
  } catch (fail) {
    return false;
  }
  return true;
};
