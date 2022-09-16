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
    return `${formatDate(updatedAt)} (last edit)`;
  } else {
    return formatDate(createdAt);
  }
};
