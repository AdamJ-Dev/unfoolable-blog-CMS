import styled from 'styled-components';

type ContainerProps = {
  m?: string | number;
  p?: string | number;
};

const Container = styled.div<ContainerProps>`
  display: inline-block;
  max-width: 80%;
  margin: ${({ m }) => m || '20px'};
  padding: ${({ p }) => p || '20px'};
`;

export default Container;
