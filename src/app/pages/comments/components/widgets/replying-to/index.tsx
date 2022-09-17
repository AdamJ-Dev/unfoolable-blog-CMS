import { FlippedReplyIcon } from '../../../../../../lib/icons';
import StyledNextLink from '../../../../../components/styled/link/next-link.styled';
import styles from './index.module.css';

type ReplyingToProps = {
  parentId: string;
  replyingTo: string;
};

const ReplyingTo: React.FC<ReplyingToProps> = ({ parentId, replyingTo }) => {
  return (
    <span className={styles.inReplyTo}>
      in reply to{' '}
      <StyledNextLink
        href={`#${parentId}`}
        linker={
          <span>
            {replyingTo} <FlippedReplyIcon />
          </span>
        }
      />
    </span>
  );
};

export default ReplyingTo;
