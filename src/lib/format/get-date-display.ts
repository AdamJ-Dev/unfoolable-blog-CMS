const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
};

export const getDateDisplay = (createdAt: string, updatedAt?: string) => {
  const showLastEdited = updatedAt && createdAt !== updatedAt;
  if (showLastEdited) {
    return `Last edited on ${formatDate(updatedAt)}`;
  } else {
    return formatDate(createdAt);
  }
};
