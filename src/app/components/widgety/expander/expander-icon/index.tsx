import CollapseIcon from './icons/collapse-icon';
import ExpandIcon from './icons/expand-icon';
import styles from './index.module.css';

type ExpanderIconProps = {
  expanded: boolean;
  toggler: () => void;
};

const ExpanderIcon: React.FC<ExpanderIconProps> = ({ expanded, toggler }) => {
  return (
    <span className={styles.expanderIcon} onClick={toggler}>
      {expanded ? CollapseIcon : ExpandIcon}
    </span>
  );
};

export default ExpanderIcon;
