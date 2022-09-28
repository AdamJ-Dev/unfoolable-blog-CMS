import { FormEvent, useState } from 'react';
import type { Blog, BlogUpdates } from '../../types/blogs';
import { getDraftsPath, getHomePath } from '../../../../config/pages/selectors';
import { NWArrowIcon } from '../../../lib/icons';
import { InputChange, TextAreaChange } from '../../types/general';
import { updateBlog } from '../../utility/blogs/update-blog';
import Markdownalise from '../../components/markdownalise';
import Button from '../../components/styled/button/index.styled';
import Container from '../../components/styled/container/index.styled';
import InputLabel from '../../components/styled/input-label/index.styled';
import StyledNextLink from '../../components/styled/link/next-link.styled';
import TextInput from '../../components/styled/text-input/index.styled';
import Textarea from '../../components/styled/textarea/index.styled';
import useAutosave from '../../hooks/use-autosave';
import BlogTagsControls from './components/blog-tags-controls';
import styles from './index.module.css';
import { getEmptyPromise } from '../../../lib/format/get-empty-promise';
import ErrorLog from '../../components/widgety/error-log';
import deleteBlog from '../../utility/blogs/delete-blog';
import { postBlog } from '../../utility/blogs/post-blog';
import { useRouter } from 'next/router';

type WorkspaceProps = {
  blog: Blog;
};

const Workspace: React.FC<WorkspaceProps> = ({ blog }) => {
  const router = useRouter();
  const [title, setTitle] = useState(blog.title);
  const [path, setPath] = useState(blog.path);
  const [body, setBody] = useState(blog.body);
  const [tags, setTags] = useState(blog.tags);
  const [isPublishing, setIsPublishing] = useState(false);
  const [publishingError, setPublishingError] = useState<string | null>(null);

  useAutosave<BlogUpdates>(
    { title, path, body, tags },
    blog.isDraft
      ? async (updates: BlogUpdates) => {
          await updateBlog(blog.id, updates);
        }
      : getEmptyPromise()
  );

  const handleTitleChange = (e: InputChange) => {
    setTitle(e.currentTarget.value);
  };

  const handlePathChange = (e: InputChange) => {
    setPath(e.currentTarget.value);
  };

  const handleBodyChange = (e: TextAreaChange) => {
    setBody(e.currentTarget.value);
  };

  const handlePublishNew = async () => {
    // delete draft, then create anew
    const { error: deleteError } = await deleteBlog(blog.id);
    if (deleteError) {
      setIsPublishing(false);
      setPublishingError(deleteError);
    } else {
      const { error: postError } = await postBlog({ title, path, body, tags, isDraft: false });
      setIsPublishing(false);
      if (postError) {
        setPublishingError(postError);
      } else {
        router.push(getHomePath());
      }
    }
  };

  const handlePublishEdit = async () => {
    const { error } = await updateBlog(blog.id, { title, path, body, tags });
    setIsPublishing(false);
    if (error) {
      setPublishingError(error);
    } else {
      router.push(getHomePath());
    }
  };

  const handlePublish = async (e: FormEvent) => {
    e.preventDefault();
    setIsPublishing(true);
    if (blog.isDraft) {
      await handlePublishNew();
    } else {
      await handlePublishEdit();
    }
  };

  return (
    <Container>
      <div className={styles.workspace}>
        <div className={styles.newBlogForm}>
          <StyledNextLink
            href={getDraftsPath()}
            linker={
              <span>
                <NWArrowIcon /> all drafts
              </span>
            }
          />
          <h1>{blog.isDraft ? 'New Blog:' : 'Edit:'} </h1>
          <form onSubmit={handlePublish}>
            <InputLabel htmlFor="new-blog-title">Title:</InputLabel>
            <TextInput
              id="new-blog-title"
              type="text"
              name="title"
              onChange={handleTitleChange}
              defaultValue={blog.title}
              required
            />
            <InputLabel htmlFor="new-blog-path">Url path:</InputLabel>
            <TextInput
              id="new-blog-path"
              type="text"
              name="path"
              onChange={handlePathChange}
              defaultValue={blog.path}
              required
            />
            <BlogTagsControls tags={tags} setTags={setTags} />
            <hr />
            <InputLabel htmlFor="new-blog-body">Body:</InputLabel>
            <Textarea
              id="new-blog-body"
              title="new-blog-body"
              className={styles.blogBodyInput}
              name="body"
              onChange={handleBodyChange}
              defaultValue={blog.body}
              required
            />

            {!isPublishing ? <Button>Publish</Button> : <Button>Publishing...</Button>}
            {publishingError && <ErrorLog error={publishingError} />}
          </form>
        </div>
        <div>
          <h1>{title}</h1>
          <Markdownalise>{body}</Markdownalise>
        </div>
      </div>
    </Container>
  );
};

export default Workspace;
