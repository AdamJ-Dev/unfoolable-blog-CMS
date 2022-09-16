import { DBBlog } from '../../../../types/blogs';

export const parseDBBlogs = (blogs: DBBlog[]) => {
  return blogs.map((blog: DBBlog) => ({ ...blog, id: blog._id.toString() }));
};
