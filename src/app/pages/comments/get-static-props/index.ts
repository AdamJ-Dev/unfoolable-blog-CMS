import type { GetStaticProps } from 'next';
import { getFindBlogsCommentsUrl } from '../../../../../config/api/selectors';
import { isString } from '../../../../lib/format/is-string';
import { getUnexpectedErrorRedirect } from '../../../utility/redirects/unexpected-error';
import { parseDBComments } from './helpers/parse-db-comments';
import { parsePinnedComments } from './helpers/parse-pinned';

const getStaticProps: GetStaticProps = async ({ params }) => {
  const blogId = params?.blog_id;
  if (!isString(blogId)) return getUnexpectedErrorRedirect();

  const res = await fetch(getFindBlogsCommentsUrl(blogId, { absolute: true }));
  if (!res.ok) return getUnexpectedErrorRedirect();

  const data = await res.json();

  const { pinned, unpinned } = parsePinnedComments(parseDBComments(data.comments));
  const comments = pinned.concat(unpinned);

  return {
    props: {
      comments,
      blogId,
    },
  };
};

export default getStaticProps;
