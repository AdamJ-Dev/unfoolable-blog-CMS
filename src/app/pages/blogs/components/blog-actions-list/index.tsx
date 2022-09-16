import StyledNextLink from '../../../../components/styled/link/next-link.styled';
import DeleteButton from '../../../../components/widgety/delete-button';
import deleteBlog from '../../../../utility/blogs/delete-blog';
import styles from './index.module.css';

type BlogActionsProps = {
  id: string;
};

const BlogActionsList: React.FC<BlogActionsProps> = ({ id }) => {
  return (
    <ul className={styles.blogActionsList}>
      <li>
        <StyledNextLink href={`/blog/comments/${id}`} linker="view comments" />
      </li>
      <li>
        <StyledNextLink href={`/blog/workspace/${id}`} linker="edit" />
      </li>
      <li>
        <DeleteButton id={id} deleter={deleteBlog} />
      </li>
    </ul>
  );
};

export default BlogActionsList;
