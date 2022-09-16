import { useRouter } from 'next/router';
import { useState } from 'react';
import { CONFIRM_DELETE } from '../../../constants/dialogue';
import styles from './index.module.css';

type DeleteButtonProps = {
  id: string;
  deleter: (id: string) => Promise<{ error: string | null }>;
};

const DeleteButton: React.FC<DeleteButtonProps> = ({ id, deleter }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    if (confirm(CONFIRM_DELETE)) {
      setLoading(true);
      const { error } = await deleter(id);
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
        <button type="button" onClick={handleDelete} className={styles.deleteButtonEnabled}>
          delete
        </button>
      ) : (
        <button type="button" className={styles.deleteButtonDisabled} disabled>
          loading...
        </button>
      )}
    </>
  );
};

export default DeleteButton;
