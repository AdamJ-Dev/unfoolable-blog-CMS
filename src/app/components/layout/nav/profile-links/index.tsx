import useUser from '../../../../hooks/use-user';
import NonUserLinks from './lists/non-user-links';
import UserLinks from './lists/user-links';
import styles from './index.module.css';

const ProfileLinks: React.FC = () => {
  const { user, loading } = useUser();
  return (
    <div className={styles.linksContainer}>
      {loading ? 'Loading...' : user ? <UserLinks /> : <NonUserLinks />}
    </div>
  );
};

export default ProfileLinks;
