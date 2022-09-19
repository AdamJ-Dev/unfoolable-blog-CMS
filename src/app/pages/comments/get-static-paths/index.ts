import type { GetStaticPaths } from 'next';
import type { DBBlog } from '../../../types/blogs';
import { getFindPublishedBlogsUrl } from '../../../../../config/api/selectors';
import { getBlogId } from '../../../utility/blogs/parse-db-blogs';

const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(getFindPublishedBlogsUrl({ absolute: true }));

  if (!res.ok) {
    return {
      paths: [],
      fallback: false,
    };
  }

  const blogs = (await res.json()).blogs;
  const paths = blogs.map((blog: DBBlog) => ({
    params: {
      blog_id: getBlogId(blog),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default getStaticPaths;
