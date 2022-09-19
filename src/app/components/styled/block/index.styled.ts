import styled from 'styled-components';

const Block = styled.div`
  display: block;
  margin: 15px 0px;
  padding: 15px;
  background: ${(props) => {
    return props.color || props.theme.colours.block;
  }};
`;

export default Block;
