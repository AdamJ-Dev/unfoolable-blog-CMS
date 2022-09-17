import { createContext, Dispatch } from 'react';
import { CommentsAction } from './reducer';

export type CommentsState = {
  blogId: string;
};

export type CommentsContext = CommentsState & {
  dispatch: Dispatch<CommentsAction>;
};

const DEFAULT_CONTEXT = {
  blogId: '',
  dispatch: () => null,
};

const CommentsContext = createContext<CommentsContext>(DEFAULT_CONTEXT);
export default CommentsContext;
