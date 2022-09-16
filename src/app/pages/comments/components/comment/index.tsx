import { useEffect, useState } from 'react';
import { getDateDisplay } from '../../../../../lib/format/get-date-display';
import type { BlogComment } from '../../../../types/comments';
import deleteComment from '../../../../utility/comments/delete-comment';
import Markdownalise from '../../../../components/markdownalise';
import Block from '../../../../components/styled/block/index.styled';
import DeleteButton from '../../../../components/widgety/delete-button';
import CommentAuthor from '../widgets/comment-author/author.styled';
import CommentPin from '../widgets/comment-pin';
import ReplyButton from '../widgets/reply-button';
import ReplyingTo from '../widgets/replying-to';
import Reply from '../reply';
import styles from './index.module.css';
import { useRouter } from 'next/router';

type CommentProps = {
  comment: BlogComment;
  replyingTo?: string;
};

const Comment: React.FC<CommentProps> = ({
  comment: {
    id,
    author: { name, isAdmin, isUser },
    body,
    pinned,
    parentId,
    createdAt,
    updatedAt,
  },
  replyingTo,
}) => {
  const router = useRouter();
  const [isReplying, setIsReplying] = useState(false);
  const [isInFocus, setIsInFocus] = useState(false);

  useEffect(() => {
    const shouldFocus = Boolean(router.asPath.includes(`#${id}`));
    setIsInFocus(shouldFocus);
  }, [router.asPath, id]);

  return (
    <div id={id}>
      <Block className={isInFocus ? styles.focusedComment : ''}>
        <CommentAuthor isAdmin={isAdmin} isUser={isUser}>
          {name}
        </CommentAuthor>
        <Markdownalise>{body}</Markdownalise>
        <hr />
        <div className={styles.commentInfo}>
          {parentId && replyingTo && (
            <span className={styles.commentInfoItem}>
              <ReplyingTo parentId={parentId} replyingTo={replyingTo} />
            </span>
          )}
          <span>
            <strong>Posted</strong>: <em>{getDateDisplay(createdAt, updatedAt)}</em>
          </span>
        </div>
        <hr />
        <div className={styles.commentActions}>
          <ReplyButton isReplying={isReplying} setIsReplying={setIsReplying} />
          {' | '}
          <CommentPin pinned={pinned} commentId={id} />
          {' | '}
          <DeleteButton id={id} deleter={deleteComment} />
        </div>
      </Block>
      {isReplying && <Reply parentId={id} replyingTo={name} setIsReplying={setIsReplying} />}
    </div>
  );
};

export default Comment;
