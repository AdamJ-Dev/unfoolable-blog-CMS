import { useRouter } from 'next/router';
import { FormEvent, useEffect, useState } from 'react';
import { getLoginPath, getWorkspacePath } from '../../../../config/pages/selectors';
import Block from '../../components/styled/block/index.styled';
import Button from '../../components/styled/button/index.styled';
import Container from '../../components/styled/container/index.styled';
import InputLabel from '../../components/styled/input-label/index.styled';
import StyledNextLink from '../../components/styled/link/next-link.styled';
import TextInput from '../../components/styled/text-input/index.styled';
import DeleteButton from '../../components/widgety/delete-button';
import ErrorLog from '../../components/widgety/error-log';
import { DRAFT_TITLE_TAKEN } from '../../constants/errors';
import { Blog, NewDraftForm } from '../../types/blogs';
import deleteBlog from '../../utility/blogs/delete-blog';
import { postBlog } from '../../utility/blogs/post-blog';
import { fetchDrafts } from '../../utility/drafts/fetch-drafts';
import { getNewDraftTemplate } from '../../utility/drafts/new-draft-template';
import styles from './index.module.css';

const DraftsPage: React.FC = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isDrafting, setIsDrafting] = useState(false);
  const [draftError, setDraftError] = useState<string | null>(null);
  const [drafts, setDrafts] = useState<Blog[] | undefined>(undefined);

  useEffect(() => {
    const establishDrafts = async () => {
      const { blogs, error } = await fetchDrafts();
      setIsLoading(false);
      if (error) {
        router.push(getLoginPath());
      } else {
        setDrafts(blogs);
      }
    };
    establishDrafts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleNewDraft = async (e: FormEvent<NewDraftForm>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const title = form.title.value.trim();
    const existingTitles = drafts?.map((draft) => draft.title);
    if (existingTitles?.includes(title)) {
      setDraftError(DRAFT_TITLE_TAKEN);
    } else {
      const newDraft = getNewDraftTemplate(title);
      setIsDrafting(true);
      const { blog, error } = await postBlog(newDraft);
      setIsDrafting(false);
      if (error) {
        setDraftError(error);
      } else {
        router.push(getWorkspacePath(blog.path));
      }
    }
  };

  return (
    <Container>
      {!isLoading && drafts && (
        <>
          <div className={styles.newDraftForm}>
            <Block>
              <form onSubmit={handleNewDraft}>
                <InputLabel>New draft title</InputLabel>
                <TextInput type="text" name="title" required />
                {!isDrafting ? <Button>Create</Button> : <Button disabled>Drafting...</Button>}
              </form>
            </Block>
          </div>
          {draftError && <ErrorLog error={draftError} />}
          <h2>Recent drafts:</h2>
          <ul>
            {drafts.map((draft: Blog) => (
              <li key={draft.id}>
                <h3>{draft.title}</h3>
                <StyledNextLink href={getWorkspacePath(draft.path)} linker="edit" />
                {' | '}
                <DeleteButton id={draft.id} deleter={deleteBlog} />
              </li>
            ))}
          </ul>
        </>
      )}
    </Container>
  );
};

export default DraftsPage;
