import { GetStaticProps } from 'next';
import { getFindPublishedBlogsUrl } from '../../../../../config/api/selectors';
import { getUnexpectedErrorRedirect } from '../../../utility/redirects/unexpected-error';
import { parseDBBlogs } from '../../../utility/blogs/parse-db-blogs';

const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(getFindPublishedBlogsUrl({ absolute: true }));

  if (!res.ok) {
    return getUnexpectedErrorRedirect();
  }

  const data = await res.json();
  const blogs = parseDBBlogs(data.blogs);

  return {
    props: {
      blogs,
    },
  };
};

export default getStaticProps;
