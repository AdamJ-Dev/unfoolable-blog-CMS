import Container from '../../components/styled/container/index.styled';
import Expander from '../../components/widgety/expander';
import BlogActions from './blog-actions';
import type { Blog } from '../../utility/blogs/types';

type BlogsPageProps = {
  blogs: Blog[];
};

const BlogsPage: React.FC<BlogsPageProps> = ({ blogs }) => {
  return (
    <Container>
      <h1>Posts</h1>
      <ul>
        {blogs.map((blog) => (
          <li key={blog._id}>
            <Expander target={<span>{blog.title}</span>} details={<BlogActions id={blog._id} />} />
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default BlogsPage;
