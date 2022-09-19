import { useMemo } from 'react';
import { getLanguage } from './helpers/get-language';
import { tomorrowNight } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { prepareHighlight } from './helpers/prepare-highlight';
import SyntaxHighlighter from 'react-syntax-highlighter';
import styles from './index.module.css';

type HighlightedCodeProps = {
  children: React.ReactNode;
  inline?: boolean;
  className?: string;
  otherProps: Record<string, unknown>;
};

const HighlightedCode: React.FC<HighlightedCodeProps> = ({ children, inline, className, otherProps }) => {
  const language = useMemo(() => {
    return getLanguage(className);
  }, [className]);

  if (!inline && language) {
    return (
      <SyntaxHighlighter
        className={styles.highlightedCode}
        language={language}
        style={tomorrowNight}
        PreTag="div"
        {...otherProps}
      >
        {prepareHighlight(children)}
      </SyntaxHighlighter>
    );
  } else {
    return (
      <code className={className} {...otherProps}>
        {children}
      </code>
    );
  }
};

export default HighlightedCode;
