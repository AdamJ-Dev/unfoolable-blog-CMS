import { getUpdateBlogUrl } from '../../../../config/api/selectors';
import { putJson } from '../../../lib/data-fetching/post-json';
import type { BlogUpdates } from '../../types/blogs';
import { getAuthTokenClient } from '../data-fetching/get-auth-creds';

export const updateBlog = async (id: string, updates: BlogUpdates) => {
  const res = await putJson(getUpdateBlogUrl(id), updates, getAuthTokenClient());
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
