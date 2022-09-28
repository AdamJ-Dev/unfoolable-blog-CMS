import { getCommentsPath, getWorkspacePath } from '../../../../../../config/pages/selectors';
import StyledNextLink from '../../../../components/styled/link/next-link.styled';
import DeleteButton from '../../../../components/widgety/delete-button';
import type { Blog } from '../../../../types/blogs';
import deleteBlog from '../../../../utility/blogs/delete-blog';
import styles from './index.module.css';

type BlogActionsProps = {
  blog: Blog;
};

const BlogActionsList: React.FC<BlogActionsProps> = ({ blog }) => {
  return (
    <ul className={styles.blogActionsList}>
      <li>
        <StyledNextLink href={getCommentsPath(blog.id)} linker="view comments" />
      </li>
      <li>
        <StyledNextLink href={getWorkspacePath(blog.path)} linker="edit" />
      </li>
      <li>
        <DeleteButton id={blog.id} deleter={deleteBlog} />
      </li>
    </ul>
  );
};

export default BlogActionsList;
