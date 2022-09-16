import { PlusIcon } from '../../../lib/icons';
import Container from '../../components/styled/container/index.styled';
import StyledNextLink from '../../components/styled/link/next-link.styled';
import { CREATE_COMMENT } from '../../constants/element-ids';
import type { BlogComment } from '../../types/comments';
import { withParentNames } from '../../utility/comments/with-parent-names';
import Comment from './components/comment';
import CommentForm from './components/comment-form';
import CommentsContextProvider from './context/provider';
import styles from './index.module.css';

type CommentSectionProps = {
  comments: BlogComment[];
  blogId: string;
};

const CommentSection: React.FC<CommentSectionProps> = ({ comments, blogId }) => {
  return (
    <CommentsContextProvider blogId={blogId}>
      <Container>
        <div className={styles.commentSection}>
          <div>
            <h2 className={styles.commentSectionTitle}>Discussion </h2>
            <StyledNextLink href={`#${CREATE_COMMENT}`} linker={<PlusIcon />} />
          </div>
          <ul className={styles.commentSectionList}>
            {withParentNames(comments).map((commentInfo) => (
              <li key={commentInfo.comment.id}>
                <Comment comment={commentInfo.comment} replyingTo={commentInfo.parentName} />
              </li>
            ))}
          </ul>
          <CommentForm />
        </div>
      </Container>
    </CommentsContextProvider>
  );
};

export default CommentSection;
