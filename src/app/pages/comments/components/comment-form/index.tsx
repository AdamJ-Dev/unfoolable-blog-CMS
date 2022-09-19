import { useRouter } from 'next/router';
import { FormEvent, useState } from 'react';
import { ExitIcon } from '../../../../../lib/icons';
import { BY_CLICKING_POST, FORMATTING_NOTIF } from '../../../../constants/dialogue';
import { CREATE_COMMENT } from '../../../../constants/element-ids';
import type { NewCommentForm } from '../../../../types/comments';
import { postComment } from '../../../../utility/comments/post-comment';
import { checkForAdminship } from '../../../../hooks/use-user/helpers/check-for-user';
import { getCreateAdminCommentUrl, getCreateUserCommentUrl } from '../../../../../../config/api/selectors';
import Block from '../../../../components/styled/block/index.styled';
import InputLabel from '../../../../components/styled/input-label/index.styled';
import StyledNextLink from '../../../../components/styled/link/next-link.styled';
import useCommentsContext from '../../context/use-context';
import TextInput from '../../../../components/styled/text-input/index.styled';
import styles from './index.module.css';
import ErrorLog from '../../../../components/widgety/error-log';
import { getCommentsFormatting } from '../../../../../../config/pages/selectors';
import Textarea from '../../../../components/styled/textarea/index.styled';

type CommentFormProps = {
  reply?: {
    parentId: string;
    replyingToAuthor: string;
    setIsReplying: (newReplying: boolean) => void;
  };
};

const CommentForm: React.FC<CommentFormProps> = ({ reply }) => {
  const router = useRouter();
  const { blogId } = useCommentsContext();
  const { isAdmin } = checkForAdminship();
  const [isPosting, setIsPosting] = useState(false);
  const [postError, setPostError] = useState<string | null>(null);

  const handlePostComment = async (e: FormEvent<NewCommentForm>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const author = form.author.value.trim();
    const body = form.body.value.trim();

    setIsPosting(true);
    const { error } = await postComment(isAdmin ? getCreateAdminCommentUrl() : getCreateUserCommentUrl(), {
      author: {
        name: author,
        isUser: true,
        isAdmin,
      },
      body,
      blogId,
      parentId: reply?.parentId,
    });
    setIsPosting(false);

    if (error) {
      setPostError(error);
    } else router.reload();
  };

  return (
    <>
      <div className={`${reply && styles.replyContainer} ${styles.formContainer}`}>
        <Block>
          <form id={`${!reply && CREATE_COMMENT}`} onSubmit={handlePostComment}>
            <div className={styles.replyBanner}>
              <span>
                <strong>New comment:</strong>
              </span>
              {!!reply && (
                <span className={styles.exitReply} onClick={() => reply.setIsReplying(false)}>
                  <ExitIcon />
                </span>
              )}
            </div>
            <InputLabel htmlFor="create-comment-author">Author:</InputLabel>
            <TextInput
              id="create-comment-author"
              type="text"
              className={styles.commentName}
              name="author"
              autoComplete="off"
              required
            />
            <InputLabel htmlFor="create-comment-body">Your thoughts:</InputLabel>
            <Textarea
              className={styles.commentBody}
              title="new comment"
              name="body"
              id="create-comment-body"
              required
            ></Textarea>
            <div className={styles.dialogueItem}>
              {FORMATTING_NOTIF}
              <StyledNextLink href={getCommentsFormatting().link} linker={getCommentsFormatting().name} />
              {'. '}
              {BY_CLICKING_POST} <StyledNextLink href="/about#comment-policy" linker="comment policy" />
              {'.'}
            </div>
            {!isPosting ? (
              <button type="submit" className={styles.postButton}>
                Post
              </button>
            ) : (
              <button className={styles.postButtonDisabled} disabled>
                Loading...
              </button>
            )}
          </form>
        </Block>
        {postError && <ErrorLog error={postError} />}
      </div>
    </>
  );
};

export default CommentForm;
