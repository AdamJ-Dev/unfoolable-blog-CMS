import type { GetServerSideProps } from 'next';
import { getFindBlogUrl } from '../../../../../config/api/selectors';
import { isString } from '../../../../lib/type-guards/is-string';
import { parseDBBlogs } from '../../../utility/blogs/parse-db-blogs';
import { getAuthHeaderServer } from '../../../utility/data-fetching/get-auth-creds';
import { getUnexpectedErrorRedirect } from '../../../utility/routing/unexpected-error';

const getServerSideProps: GetServerSideProps = async ({ req, query }) => {
  if (!isString(query.blog_path)) return getUnexpectedErrorRedirect();

  const res = await fetch(getFindBlogUrl(query.blog_path, { absolute: true }), {
    headers: getAuthHeaderServer(req.cookies.user),
  });

  if (!res.ok) return getUnexpectedErrorRedirect();

  const data = await res.json();
  const blog = parseDBBlogs([data.blog])[0];

  return {
    props: {
      blog,
    },
  };
};

export default getServerSideProps;
