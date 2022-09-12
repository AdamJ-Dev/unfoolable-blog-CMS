import styled from 'styled-components';

type LinkProps = {
  hoverColor?: string;
};

const StyledLink = styled.a<LinkProps>`
  color: ${({ color }) => (color ? color : 'blue')};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    ${({ hoverColor }) => hoverColor && `color: ${hoverColor}`}
  }
`;

export default StyledLink;
