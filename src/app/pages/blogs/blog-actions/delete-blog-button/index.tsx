import { useRouter } from 'next/router';
import { useState } from 'react';
import { CONFIRM_DELETE } from '../../../../constants/dialogue';
import deleteBlog from '../../../../utility/blogs/delete-blog';
import styles from './index.module.css';

type DeleteBlogbuttonProps = {
  id: string;
};

const DeleteBlogbutton: React.FC<DeleteBlogbuttonProps> = ({ id }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    if (confirm(CONFIRM_DELETE)) {
      setLoading(true);
      const { error } = await deleteBlog(id);
      if (error) {
        router.push('/500');
      } else {
        router.reload();
      }
    }
  };

  return (
    <>
      {!loading ? (
        <button type="button" onClick={handleDelete} className={styles.deleteButton}>
          delete
        </button>
      ) : (
        <button type="button" className={styles.deleteButton} disabled>
          loading...
        </button>
      )}
    </>
  );
};

export default DeleteBlogbutton;
