import { BlogComment } from '../../../../types/comments';

type Comments = BlogComment[];

export const parsePinnedComments = (comments: Comments) => {
  const pinned: Comments = [];
  const unpinned: Comments = [];
  for (const comment of comments) {
    if (comment.pinned) {
      pinned.push(comment);
    } else {
      unpinned.push(comment);
    }
  }
  return {
    pinned,
    unpinned,
  };
};
