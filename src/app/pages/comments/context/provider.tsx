import { useReducer } from 'react';
import CommentsContext from './setup';
import commentsReducer from './reducer';

type CommentsContextProviderProps = {
  children: React.ReactNode;
  blogId: string;
};

const CommentsContextProvider: React.FC<CommentsContextProviderProps> = ({ children, blogId }) => {
  const [state, dispatch] = useReducer(commentsReducer, { blogId });

  const context = { ...state, dispatch };
  return <CommentsContext.Provider value={context}>{children}</CommentsContext.Provider>;
};

export default CommentsContextProvider;
