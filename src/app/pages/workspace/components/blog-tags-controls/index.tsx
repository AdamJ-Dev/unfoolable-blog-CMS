import { useRef } from 'react';
import { DeleteIcon } from '../../../../../lib/icons';
import InputLabel from '../../../../components/styled/input-label/index.styled';
import TextInput from '../../../../components/styled/text-input/index.styled';
import styles from './index.module.css';

type BlogTagsControlsProps = {
  tags: string[];
  setTags: (newTags: string[]) => void;
};

const BlogTagsControls: React.FC<BlogTagsControlsProps> = ({ tags, setTags }) => {
  const tagInput = useRef<HTMLInputElement>(null);

  const handleNewTag = () => {
    if (tagInput.current) {
      const tag = tagInput.current.value;
      const isSubstantive = Boolean(tag.trim());
      const isNew = !tags.includes(tag);
      if (isSubstantive && isNew) {
        setTags([...tags, tag]);
      }
      tagInput.current.value = '';
    }
  };

  const handleDeleteTag = (target: string) => {
    setTags(tags.filter((tag) => tag !== target));
  };

  return (
    <>
      {!!tags.length && (
        <>
          <div>Tags:</div>
          <ul>
            {tags.map((tag) => (
              <li key={tag}>
                <div>
                  {tag}{' '}
                  <span className={styles.deleteTag} onClick={() => handleDeleteTag(tag)}>
                    <DeleteIcon />
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
      <InputLabel htmlFor="new-blog-tag">Add Tag:</InputLabel>
      <TextInput id="new-blog-tag" ref={tagInput} type="text" name="tag" autoComplete="off" />
      <button type="button" onClick={() => handleNewTag()}>
        Add
      </button>
    </>
  );
};

export default BlogTagsControls;
