import remarkGfm from 'remark-gfm';
import ReactMarkdown from 'react-markdown';
import HighlightedCode from './highlighted-code';

type MarkdownaliseProps = {
  content: string;
};

const Markdownalise: React.FC<MarkdownaliseProps> = ({ content }) => {
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
      {content}
    </ReactMarkdown>
  );
};

export default Markdownalise;
