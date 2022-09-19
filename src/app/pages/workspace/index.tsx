import { useEffect, useState } from 'react';
import { getAutosaveInterval, getDraftsPath } from '../../../../config/pages/selectors';
import { clearStorage, getCache, getLatest, setCache, setLatest } from '../../../lib/document/local-storage';
import { NWArrowIcon } from '../../../lib/icons';
import Markdownalise from '../../components/markdownalise';
import Button from '../../components/styled/button/index.styled';
import Container from '../../components/styled/container/index.styled';
import InputLabel from '../../components/styled/input-label/index.styled';
import StyledNextLink from '../../components/styled/link/next-link.styled';
import TextInput from '../../components/styled/text-input/index.styled';
import Textarea from '../../components/styled/textarea/index.styled';
import { Blog } from '../../types/blogs';
import { InputChange, TextAreaChange } from '../../types/general';
import styles from './index.module.css';

type WorkspaceProps = {
  blog: Blog;
};

const Workspace: React.FC<WorkspaceProps> = ({ blog }) => {
  const [isPublishing, setIsPublishing] = useState(false);
  const [title, setTitle] = useState(blog.title);
  const [path, setPath] = useState(blog.path);
  const [body, setBody] = useState(blog.body);
  const [tags, setTags] = useState(blog.tags);

  useEffect(() => {
    const orginal = JSON.stringify({
      title: blog.title,
      path: blog.path,
      body: blog.body,
    });
    setCache(orginal);
    setLatest(orginal);

    // autosave
    setInterval(() => {
      const cache = getCache();
      const latest = getLatest();
      if (cache !== latest) {
        setCache(latest);
        console.log('saving');
      }
    }, getAutosaveInterval());

    return () => clearStorage();
  }, []);

  useEffect(() => {
    setLatest(JSON.stringify({ title, path, body }));
  }, [title, path, body]);

  const handleTitleChange = (e: InputChange) => {
    setTitle(e.currentTarget.value);
  };

  const handlePathChange = (e: InputChange) => {
    setPath(e.currentTarget.value);
  };

  const handleBodyChange = (e: TextAreaChange) => {
    setBody(e.currentTarget.value);
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
          <h1>New Blog:</h1>
          <form>
            <InputLabel htmlFor="new-blog-title">Title</InputLabel>
            <TextInput
              id="new-blog-title"
              type="text"
              name="title"
              onChange={handleTitleChange}
              defaultValue={blog.title}
              required
            />
            <InputLabel htmlFor="new-blog-path">Url path</InputLabel>
            <TextInput
              id="new-blog-path"
              type="text"
              name="path"
              onChange={handlePathChange}
              defaultValue={blog.path}
              required
            />
            <InputLabel htmlFor="new-blog-body">Body</InputLabel>
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
