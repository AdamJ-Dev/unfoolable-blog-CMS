import remarkGfm from 'remark-gfm';
import ReactMarkdown from 'react-markdown';
import HighlightedCode from './highlighted-code';
import Blockquote from '../styled/blockquote/index.styled';
import StyledLink from '../styled/link/link.styled';

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
        blockquote: (props) => <Blockquote {...props} />,
        a: (props) => <StyledLink {...props} />,
      }}
      remarkPlugins={[remarkGfm]}
    >
      {children}
    </ReactMarkdown>
  );
};

export default Markdownalise;
