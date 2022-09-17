import { ActionMap } from '../../../../lib/types/action-map';
import type { CommentsState } from './setup';

export enum ActionTypes {
  SET_BLOG_ID = 'SET_BLOG_ID',
}

type PayloadMap = {
  [ActionTypes.SET_BLOG_ID]: string;
};

export type CommentsAction = ActionMap<PayloadMap>[keyof PayloadMap];

const commentsReducer = (state: CommentsState, action: CommentsAction): CommentsState => {
  switch (action.type) {
    case ActionTypes.SET_BLOG_ID:
      return {
        ...state,
        blogId: action.payload,
      };
  }
};

export default commentsReducer;
