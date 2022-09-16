import { FlippedReplyIcon } from '../../../../../../lib/icons';
import StyledNextLink from '../../../../../components/styled/link/next-link.styled';

type ReplyingToProps = {
  parentId: string;
  replyingTo: string;
};

const ReplyingTo: React.FC<ReplyingToProps> = ({ parentId, replyingTo }) => {
  return (
    <span>
      Replying to{' '}
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
