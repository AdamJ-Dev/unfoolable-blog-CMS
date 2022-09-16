export type Replacement = [string, string];

export const applyReplaceSequence = (str: string, sequence: Replacement[]) => {
  let newStr = str;
  for (const replacement of sequence) {
    const [target, source] = replacement;
    newStr = newStr.replace(target, source);
  }
  return newStr;
};
