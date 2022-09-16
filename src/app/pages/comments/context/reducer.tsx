import type { CommentsContext } from './setup';

export const actions = {
  SET_BLOG_ID: 'SET_BLOG_ID' as const,
};

type CommentsAction = {
  type: keyof typeof actions;
  payload: string;
};

const commentsReducer = (state: CommentsContext, action: CommentsAction): CommentsContext => {
  const { type, payload } = action;
  switch (type) {
    case actions.SET_BLOG_ID:
      return {
        ...state,
        blogId: payload,
      };
  }
};

export default commentsReducer;
