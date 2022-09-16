export const getIdMap = <T extends { id: string }>(items: T[]) => {
  const idMap: Record<string, T> = {};
  for (const item of items) {
    idMap[item.id] = item;
  }
  return idMap;
};
