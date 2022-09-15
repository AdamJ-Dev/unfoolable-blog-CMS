import type { Blog } from '../../types/blogs';
import Container from '../../components/styled/container/index.styled';
import Expander from '../../components/widgety/expander';
import BlogActions from './blog-actions';
import styles from './index.module.css';
import { getDateDisplay } from '../../../lib/format/get-date-display';
import Date from '../../components/styled/date/index.styled';

type BlogsPageProps = {
  blogs: Blog[];
};

const BlogsPage: React.FC<BlogsPageProps> = ({ blogs }) => {
  return (
    <Container>
      <h1>Blogs</h1>
      <ul className={styles.blogsList}>
        {blogs.map((blog) => (
          <li key={blog._id}>
            <Expander
              target={
                <span className={styles.blogInfo}>
                  <span className={styles.blogTitle}>{blog.title} </span>
                  <Date>({getDateDisplay(blog.createdAt, blog.updatedAtDate)})</Date>
                </span>
              }
              details={<BlogActions id={blog._id} />}
            />
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default BlogsPage;
