import { GetStaticProps } from 'next';
import { getFindAllBlogsUrl } from '../../../../../config/api/selectors';
import { getUnexpectedErrorRedirect } from '../../../utility/redirects/unexpected-error';

const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(getFindAllBlogsUrl({ absolute: true }));

  if (!res.ok) {
    return getUnexpectedErrorRedirect();
  }

  const data = await res.json();
  return {
    props: {
      blogs: data.blogs,
    },
  };
};

export default getStaticProps;
