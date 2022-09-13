import { getDeleteBlogUrl } from '../../../../config/api/selectors';
import { fetchDelete } from '../../../lib/data-fetching/fetch-delete';
import { getAuthToken } from '../data-fetching/get-auth-token';
import type { FetchBlogRes } from './types';

const deleteBlog = async (id: string): Promise<FetchBlogRes> => {
  const res = await fetchDelete(getDeleteBlogUrl(id), getAuthToken());
  const data = await res.json();

  if (!res.ok) {
    return {
      blog: undefined,
      error: data.error,
    };
  }

  return {
    blog: data.blog,
    error: null,
  };
};

export default deleteBlog;