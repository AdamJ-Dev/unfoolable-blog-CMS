import { getDeleteBlogUrl } from '../../../../config/api/selectors';
import { fetchDelete } from '../../../lib/data-fetching/fetch-delete';
import { getAuthTokenClient } from '../data-fetching/get-auth-creds';
import type { FetchBlogRes } from '../../types/blogs';

const deleteBlog = async (id: string): Promise<FetchBlogRes> => {
  const res = await fetchDelete(getDeleteBlogUrl(id), getAuthTokenClient());
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
