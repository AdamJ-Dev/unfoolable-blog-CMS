export const getNewDraftTemplate = (title: string) => {
  return {
    title,
    path: title,
    body: ' ',
    tags: [],
    isDraft: true,
  };
};
