import logout from '../../../../../utility/auth/logout';
import StyledLink from '../../../../styled/link/link.styled';
import styles from '../index.module.css';

const UserLinks: React.FC = () => {
  const handleLogout = () => {
    logout();
    window.location.assign('/');
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
