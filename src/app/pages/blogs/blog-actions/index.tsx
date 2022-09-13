import StyledNextLink from '../../../components/styled/link/next-link.styled';
import DeleteBlogButton from './delete-blog-button';
import styles from './index.module.css';

type BlogActionsProps = {
  id: string;
};

const BlogActions: React.FC<BlogActionsProps> = ({ id }) => {
  return (
    <ul className={styles.blogActionsList}>
      <li>
        <StyledNextLink href={`/blog/comments/${id}`} linker="view comments" />
      </li>
      <li>
        <StyledNextLink href={`/blog/workspace/${id}`} linker="edit" />
      </li>
      <li>
        <DeleteBlogButton id={id} />
      </li>
    </ul>
  );
};

export default BlogActions;
