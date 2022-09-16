import { useRouter } from 'next/router';
import { PinIcon, PinnedIcon } from '../../../../../../lib/icons';
import { updateComment } from '../../../../../utility/comments/update-comment';
import styles from './index.module.css';

type CommentPinProps = {
  pinned: boolean;
  commentId: string;
};

const CommentPin: React.FC<CommentPinProps> = ({ pinned, commentId }) => {
  const router = useRouter();

  const togglePinned = async () => {
    const { error } = await updateComment(commentId, { pinned: !pinned });
    if (error) {
      router.push('/500');
    } else {
      router.reload();
    }
  };

  return (
    <span onClick={togglePinned} className={styles.pin}>
      {pinned ? <PinnedIcon /> : <PinIcon />}
    </span>
  );
};

export default CommentPin;
