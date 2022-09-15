import StyledNextLink from '../../styled/link/next-link.styled';
import Expander from '../../widgety/expander';
import { HouseIcon, ProfileIcon } from '../../../../lib/icons';
import ProfileLinks from './profile-links';
import styles from './index.module.css';

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <StyledNextLink href="/" linker={<HouseIcon />} color="black" hoverColor="gray" />
      <Expander target={<ProfileIcon />} details={<ProfileLinks />} addIcon={false} />
    </div>
  );
};

export default NavBar;
