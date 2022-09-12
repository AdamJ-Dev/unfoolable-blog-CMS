import StyledNextLink from '../../styled/link/next-link.styled';
import Expander from '../../widgety/expander';
import HomeIcon from './icons/home-icon';
import ProfileIcon from './icons/profile-icon';
import ProfileLinks from './profile-links';
import styles from './index.module.css';

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <StyledNextLink href="/" linker={HomeIcon} color="black" hoverColor="gray" />
      <Expander target={ProfileIcon} details={<ProfileLinks />} addIcon={false} />
    </div>
  );
};

export default NavBar;
