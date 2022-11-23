import { GetServerSideProps } from 'next';
import { getFindPublishedBlogsUrl } from '../../../../../config/api/selectors';
import { getUnexpectedErrorRedirect } from '../../../utility/routing/unexpected-error';
import { parseDBBlogs } from '../../../utility/blogs/parse-db-blogs';

const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(getFindPublishedBlogsUrl());

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

export default getServerSideProps;
