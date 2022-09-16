import { createContext } from 'react';

export type CommentsContext = {
  blogId: string;
};

const DEFAULT_CONTEXT = {
  blogId: '',
};

const CommentsContext = createContext<CommentsContext>(DEFAULT_CONTEXT);
export default CommentsContext;
