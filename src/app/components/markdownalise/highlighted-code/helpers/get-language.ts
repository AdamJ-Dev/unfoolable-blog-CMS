export const getLanguage = (className?: string) => {
  if (className) {
    const match = /language-(\w+)/.exec(className);
    if (match) {
      const language = match[1];
      return language;
    }
  }
  return null;
};
