import { ExitIcon } from '../../../../../lib/icons';
import CommentForm from '../comment-form';
import ReplyingTo from '../widgets/replying-to';
import styles from './index.module.css';

type ReplyProps = {
  parentId: string;
  replyingTo: string;
  setIsReplying: (newReplying: boolean) => void;
};

const Reply: React.FC<ReplyProps> = ({ parentId, replyingTo, setIsReplying }) => {
  return (
    <>
      <div className={styles.replyBanner}>
        <ReplyingTo parentId={parentId} replyingTo={replyingTo} />
        <span onClick={() => setIsReplying(false)}>
          <ExitIcon />
        </span>
      </div>
      <CommentForm parentId={parentId} />
    </>
  );
};

export default Reply;
