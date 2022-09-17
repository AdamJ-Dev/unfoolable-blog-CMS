import styled from 'styled-components';
import { parseCssSize } from '../../../../lib/format/parse-css-size';
import { CssSize } from '../../../types/general';

type ButtonProps = {
  p?: CssSize;
  m?: CssSize;
  mt?: CssSize;
  size?: 'sm' | 'lg';
};

const Button = styled.button<ButtonProps>`
  background: ${({ theme }) => {
    return theme.colours.widget;
  }};
  border-radius: ${({ size }) => {
    switch (size) {
      case 'sm':
        return '5px';
      case 'lg':
        return '10px';
      default:
        return '8px';
    }
  }};
  border-color: ${({ theme }) => {
    return theme.colours.widget;
  }};
  padding: ${({ p }) => parseCssSize(p, '8px')};
  margin: ${({ m }) => parseCssSize(m)};
  margin-top: ${({ mt }) => parseCssSize(mt)};
  font-size: ${({ size }) => {
    switch (size) {
      case 'sm':
        return '12px';
      case 'lg':
        return '16px';
      default:
        return '14px';
    }
  }};
  color: white;
`;

export default Button;
