import useUser from '../../../../hooks/use-user';
import NonUserLinks from './versions/non-user-links';
import UserLinks from './versions/user-links';
import styles from './index.module.css';

const ProfileLinks: React.FC = () => {
  const { user, loading } = useUser();
  return loading ? (
    <p>Loading...</p>
  ) : (
    <div className={styles.linksContainer}>{user ? <UserLinks /> : NonUserLinks}</div>
  );
};

export default ProfileLinks;
