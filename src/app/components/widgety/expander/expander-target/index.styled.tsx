import styled from 'styled-components';

type StyledExpanderTargetProps = {
  expanded: boolean;
};

const StyledExpanderTarget = styled.span<StyledExpanderTargetProps>`
  ${({ expanded }) =>
    expanded &&
    `
   svg {
    color: navy;
   }
   `}
  &:hover {
    color: gray;
  }
`;

export default StyledExpanderTarget;
