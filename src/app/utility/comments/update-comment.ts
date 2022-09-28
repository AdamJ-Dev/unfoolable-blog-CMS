import { getUpdateCommentUrl } from '../../../../config/api/selectors';
import { putJson } from '../../../lib/data-fetching/post-json';
import { getAuthTokenClient } from '../data-fetching/get-auth-creds';

export const updateComment = async (id: string, updates: { pinned: boolean }) => {
  const res = await putJson(getUpdateCommentUrl(id), updates, getAuthTokenClient());
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
