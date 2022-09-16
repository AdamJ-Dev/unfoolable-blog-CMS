import NavBar from './nav';
import styles from './index.module.css';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <NavBar />
      <div className={styles.belowNav}>{children}</div>
    </>
  );
};

export default Layout;
