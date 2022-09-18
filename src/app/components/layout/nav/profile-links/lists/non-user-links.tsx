import { getLoginPath, getSignupPath } from '../../../../../../../config/pages/selectors';
import StyledNextLink from '../../../../styled/link/next-link.styled';
import styles from '../index.module.css';

const NonUserLinks: React.FC = () => (
  <ul className={styles.linksList}>
    <li className={styles.linksListItem}>
      <StyledNextLink href={getLoginPath()} linker="Log In" />
    </li>
    <li>
      <StyledNextLink href={getSignupPath()} linker="Sign Up" />
    </li>
  </ul>
);

export default NonUserLinks;
