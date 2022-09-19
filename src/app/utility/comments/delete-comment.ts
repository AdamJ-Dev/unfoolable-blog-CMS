import { getDeleteCommentUrl } from '../../../../config/api/selectors';
import { fetchDelete } from '../../../lib/data-fetching/fetch-delete';
import { getAuthTokenClient } from '../data-fetching/get-auth-creds';

const deleteComment = async (id: string) => {
  const res = await fetchDelete(getDeleteCommentUrl(id), getAuthTokenClient());
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

export default deleteComment;
