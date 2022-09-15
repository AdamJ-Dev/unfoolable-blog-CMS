import { useState } from 'react';
import StyledExpanderTarget from './expander-target/index.styled';
import ExpanderIcon from './expander-icon';
import styles from './index.module.css';

type ExpanderProps = {
  target: React.ReactElement;
  details: React.ReactElement;
  addIcon?: boolean;
};

const Expander: React.FC<ExpanderProps> = ({ target, details, addIcon = true }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={styles.expander}>
      <div>
        {addIcon ? (
          <span className={styles.targetWithIcon}>
            <span>{target}</span>
            <ExpanderIcon expanded={expanded} toggler={toggleExpand} />
          </span>
        ) : (
          <StyledExpanderTarget expanded={expanded} onClick={toggleExpand}>
            {target}
          </StyledExpanderTarget>
        )}
      </div>
      {expanded && <div className={styles.details}>{details}</div>}
    </div>
  );
};

export default Expander;
