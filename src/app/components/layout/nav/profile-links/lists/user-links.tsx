import { useRouter } from 'next/router';
import { getHomePath } from '../../../../../../../config/pages/selectors';
import logout from '../../../../../utility/auth/logout';
import StyledLink from '../../../../styled/link/link.styled';
import styles from '../index.module.css';

const UserLinks: React.FC = () => {
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push(getHomePath());
  };

  return (
    <ul className={styles.linksList}>
      <li>
        <StyledLink onClick={handleLogout}>Log Out</StyledLink>
      </li>
    </ul>
  );
};

export default UserLinks;
