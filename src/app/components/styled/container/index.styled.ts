import styled from 'styled-components';
import { parseCssSize } from '../../../../lib/format/parse-css-size';
import { CssSize } from '../../../types/general';

type ContainerProps = {
  m?: CssSize;
  p?: CssSize;
};

const Container = styled.div<ContainerProps>`
  display: inline-block;
  max-width: 80%;
  margin: ${({ m }) => parseCssSize(m, '40x')};
  padding: ${({ p }) => parseCssSize(p, '40px')};
`;

export default Container;
