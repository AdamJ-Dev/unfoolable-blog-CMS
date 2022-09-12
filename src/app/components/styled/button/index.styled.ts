import styled from 'styled-components';

const Button = styled.button`
  background: ${({ theme }) => {
    return theme.colours.widget;
  }};
  border-radius: 8px;
  border-color: ${({ theme }) => {
    return theme.colours.widget;
  }};
  padding: 8px;
  font-size: 14px;
  color: white;
`;

export default Button;
