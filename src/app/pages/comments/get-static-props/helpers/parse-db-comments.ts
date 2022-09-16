import { BlogComment, DBComment } from '../../../../types/comments';

const getClientComment = (comment: DBComment) => {
  const clientComment = {
    ...comment,
    id: comment._id.toString(),
    blogId: comment.blogId.toString(),
  } as BlogComment;
  if (comment.parentId) {
    clientComment.parentId = comment.parentId.toString();
  }
  return clientComment;
};

export const parseDBComments = (comments: DBComment[]) => {
  return comments.map((comment: DBComment) => getClientComment(comment));
};
