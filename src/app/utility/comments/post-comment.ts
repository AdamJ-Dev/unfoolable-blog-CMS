import { postJson } from '../../../lib/data-fetching/post-json';
import { NewComment } from '../../types/comments';
import { getAuthTokenClient } from '../data-fetching/get-auth-creds';

export const postComment = async (url: string, body: NewComment) => {
  const res = await postJson(url, body, getAuthTokenClient());
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
