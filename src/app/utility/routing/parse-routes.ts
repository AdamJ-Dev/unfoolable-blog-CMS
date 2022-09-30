import { Replacement, applyReplaceSequence } from '../../../lib/format/replace-sequence';

export const applyIds = (route: string, ids: Replacement[]) => {
  return applyReplaceSequence(route, ids);
};
