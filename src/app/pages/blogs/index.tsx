import type { Blog } from '../../types/blogs';
import { getDateDisplay } from '../../../lib/format/get-date-display';
import { PlusIcon } from '../../../lib/icons';
import Container from '../../components/styled/container/index.styled';
import Expander from '../../components/widgety/expander';
import BlogActions from './components/blog-actions-list';
import Date from '../../components/styled/date/index.styled';
import StyledNextLink from '../../components/styled/link/next-link.styled';
import styles from './index.module.css';
import { getDraftsPath } from '../../../../config/pages/selectors';

type BlogsPageProps = {
  blogs: Blog[];
};

const BlogsPage: React.FC<BlogsPageProps> = ({ blogs }) => {
  return (
    <Container>
      <div>
        <h1 className={styles.blogsTitle}>Blogs</h1>
        <StyledNextLink href={getDraftsPath()} linker={<PlusIcon />} />
      </div>
      <ul className={styles.blogsList}>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <Expander
              target={
                <span className={styles.blogInfo}>
                  <span className={styles.blogTitle}>{blog.title} </span>
                  <Date>({getDateDisplay(blog.createdAt, blog.updatedAtDate)})</Date>
                </span>
              }
              details={<BlogActions id={blog.id} />}
            />
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default BlogsPage;
