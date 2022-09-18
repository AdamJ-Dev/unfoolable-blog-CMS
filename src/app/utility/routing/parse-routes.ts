import { Replacement, applyReplaceSequence } from '../../../lib/format/replace-sequence';

export const applyIds = (route: string, ids: Replacement[]) => {
  return applyReplaceSequence(route, ids);
};

export const getAbsolute = (options?: { absolute: boolean }) => {
  return Boolean(options?.absolute);
};