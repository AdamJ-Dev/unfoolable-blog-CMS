import { getUpdateCommentUrl } from '../../../../config/api/selectors';
import { putJson } from '../../../lib/data-fetching/post-json';
import { getAuthToken } from '../data-fetching/get-auth-creds';

export const updateComment = async (id: string, updates: { pinned: boolean }) => {
  const res = await putJson(getUpdateCommentUrl(id), { pinned: updates.pinned ? 'PIN' : '' }, getAuthToken());
  const data = await res.json();

  if (!res.ok) {
    return {
      comment: undefined,
      error: data.error,
    };
  }

  return {
    comment: data.comment,
    error: null,
  };
};
