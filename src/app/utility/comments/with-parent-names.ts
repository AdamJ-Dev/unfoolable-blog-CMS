import { getIdMap } from '../../../lib/format/get-id-map';
import { BlogComment } from '../../types/comments';

type CommentWithParentName = {
  comment: BlogComment;
  parentName?: string;
};

export const withParentNames = (comments: BlogComment[]) => {
  const idMap = getIdMap(comments);
  const withParentNames: CommentWithParentName[] = [];
  for (const comment of comments) {
    const withParentName: CommentWithParentName = { comment };
    if (comment.parentId) {
      withParentName.parentName = idMap[comment.parentId].author.name;
    }
    withParentNames.push(withParentName);
  }
  return withParentNames;
};
