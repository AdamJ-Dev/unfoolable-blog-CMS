import { getFindBlogDraftsUrl } from '../../../../config/api/selectors';
import { parseDBBlogs } from '../blogs/parse-db-blogs';
import { getAuthHeader } from '../data-fetching/get-auth-creds';

export const fetchDrafts = async () => {
  const res = await fetch(getFindBlogDraftsUrl(), { headers: getAuthHeader() });
  const data = await res.json();

  if (!res.ok) {
    return {
      blogs: undefined,
      error: data.error,
    };
  }

  const blogs = parseDBBlogs(data.blogs);
  return {
    blogs,
    error: null,
  };
};
