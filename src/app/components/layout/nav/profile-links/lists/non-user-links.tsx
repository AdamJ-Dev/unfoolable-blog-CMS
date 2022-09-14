import StyledNextLink from '../../../../styled/link/next-link.styled';
import styles from '../index.module.css';

const NonUserLinks: React.FC = () => (
  <ul className={styles.linksList}>
    <li className={styles.linksListItem}>
      <StyledNextLink href="/login" linker="Log In" />
    </li>
    <li>
      <StyledNextLink href="/signup" linker="Sign Up" />
    </li>
  </ul>
);

export default NonUserLinks;
