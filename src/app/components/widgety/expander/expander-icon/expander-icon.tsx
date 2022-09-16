import { ChevronDownIcon, ChevronUpIcon } from '../../../../../lib/icons';
import styles from './expander-icon.module.css';

type ExpanderIconProps = {
  expanded: boolean;
  toggler: () => void;
};

const ExpanderIcon: React.FC<ExpanderIconProps> = ({ expanded, toggler }) => {
  return (
    <span className={styles.expanderIcon} onClick={toggler}>
      {expanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
    </span>
  );
};

export default ExpanderIcon;
