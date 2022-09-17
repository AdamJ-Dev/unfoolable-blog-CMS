import { useReducer } from 'react';
import CommentsContext from './setup';
import commentsReducer from './reducer';

type CommentsContextProviderProps = {
  children: React.ReactNode;
  blogId: string;
};

const CommentsContextProvider: React.FC<CommentsContextProviderProps> = ({ children, blogId }) => {
  const [state, dispatch] = useReducer(commentsReducer, { blogId });

  return <CommentsContext.Provider value={{ ...state, dispatch }}>{children}</CommentsContext.Provider>;
};

export default CommentsContextProvider;
