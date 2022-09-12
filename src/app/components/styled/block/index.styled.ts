import styled from 'styled-components';

const Block = styled.div`
  display: block;
  background: ${(props) => {
    return props.color || props.theme.colours.block;
  }};
  padding: 15px;
  margin: 15px 0;
`;

export default Block;
