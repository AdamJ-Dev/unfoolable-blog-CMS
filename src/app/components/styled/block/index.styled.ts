import styled from 'styled-components';

type BlockProps = {
  m?: string | number;
  p?: string | number;
};

const Block = styled.div<BlockProps>`
  display: block;
  background: ${(props) => {
    return props.color || props.theme.colours.block;
  }};
  margin: ${({ m }) => m || '15px 0'};
  padding: ${({ p }) => p || '15px'};
`;

export default Block;
