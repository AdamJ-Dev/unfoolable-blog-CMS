import Button from '../../../../components/styled/button/index.styled';
import Container from '../../../../components/styled/container/index.styled';
import InputLabel from '../../../../components/styled/input-label/index.styled';
import { CREATE_COMMENT } from '../../../../constants/element-ids';
import useCommentsContext from '../../context/use-context';

type CommentFormProps = {
  parentId?: string;
};

const CommentForm: React.FC<CommentFormProps> = ({ parentId }) => {
  const { blogId } = useCommentsContext();
  return (
    <Container>
      <form id={`#${CREATE_COMMENT}`}>
        <InputLabel>Your comment</InputLabel>
        <Button>Post</Button>
      </form>
    </Container>
  );
};

export default CommentForm;
