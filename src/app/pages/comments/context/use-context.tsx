import { useContext } from 'react';
import { COMMENTS_CONTEXT_PROVIDER_MISSING } from '../../../constants/errors';
import CommentsContext from './setup';

const useCommentsContext = () => {
  const commentsContext = useContext(CommentsContext);

  if (!commentsContext) {
    throw Error(COMMENTS_CONTEXT_PROVIDER_MISSING);
  }

  return commentsContext;
};

export default useCommentsContext;
