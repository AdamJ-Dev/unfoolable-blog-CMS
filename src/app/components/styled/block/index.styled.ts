import styled from 'styled-components';
import { parseCssSize } from '../../../../lib/format/parse-css-size';
import { CssSize } from '../../../types/general';

type BlockProps = {
  m?: CssSize;
  p?: CssSize;
};

const Block = styled.div<BlockProps>`
  display: block;
  background: ${(props) => {
    return props.color || props.theme.colours.block;
  }};
  margin: ${({ m }) => parseCssSize(m, '15px 0')};
  padding: ${({ p }) => parseCssSize(p, '15px')};
`;

export default Block;
