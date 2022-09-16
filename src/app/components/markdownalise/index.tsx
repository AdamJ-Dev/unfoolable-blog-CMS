import remarkGfm from 'remark-gfm';
import ReactMarkdown from 'react-markdown';
import HighlightedCode from './highlighted-code';

type MarkdownaliseProps = {
  children: string;
};

const Markdownalise: React.FC<MarkdownaliseProps> = ({ children }) => {
  return (
    <ReactMarkdown
      components={{
        code: ({ inline, className, children, ...props }) => {
          return (
            <HighlightedCode inline={inline} className={className} otherProps={props}>
              {children}
            </HighlightedCode>
          );
        },
      }}
      remarkPlugins={[remarkGfm]}
    >
      {children}
    </ReactMarkdown>
  );
};

export default Markdownalise;
