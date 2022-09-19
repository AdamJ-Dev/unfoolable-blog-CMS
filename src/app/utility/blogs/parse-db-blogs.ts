import { DBBlog } from '../../types/blogs';

export const getBlogId = (blog: DBBlog) => {
  return blog._id.toString();
};

export const parseDBBlogs = (blogs: DBBlog[]) => {
  return blogs.map((blog: DBBlog) => ({ ...blog, id: getBlogId(blog) }));
};
