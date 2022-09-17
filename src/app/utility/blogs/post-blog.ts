import { getCreateBlogUrl } from '../../../../config/api/selectors';
import { postJson } from '../../../lib/data-fetching/post-json';
import { NewBlog } from '../../types/blogs';
import { getAuthToken } from '../data-fetching/get-auth-creds';

export const postBlog = async (body: NewBlog) => {
  const res = await postJson(getCreateBlogUrl(), body, getAuthToken());
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
