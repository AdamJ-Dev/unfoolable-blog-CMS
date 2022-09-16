export const prepareHighlight = (content: React.ReactNode) => {
  return String(content).replace(/\n$/, '');
};
