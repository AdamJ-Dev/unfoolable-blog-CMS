import { ReplyIcon } from '../../../../../../lib/icons';
import styles from './index.module.css';

type ReplyButtonProps = {
  isReplying: boolean;
  setIsReplying: (newReplying: boolean) => void;
};

const ReplyButton: React.FC<ReplyButtonProps> = ({ isReplying, setIsReplying }) => {
  return (
    <>
      {!isReplying ? (
        <button type="button" className={styles.replyButtonEnabled} onClick={() => setIsReplying(true)}>
          Reply <ReplyIcon />
        </button>
      ) : (
        <button className={styles.replyButtonDisabled} disabled>
          Reply
        </button>
      )}
    </>
  );
};

export default ReplyButton;
