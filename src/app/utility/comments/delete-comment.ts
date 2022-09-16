import { getDeleteCommentUrl } from '../../../../config/api/selectors';
import { fetchDelete } from '../../../lib/data-fetching/fetch-delete';
import { getAuthToken } from '../data-fetching/get-auth-token';

const deleteComment = async (id: string) => {
  const res = await fetchDelete(getDeleteCommentUrl(id), getAuthToken());
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