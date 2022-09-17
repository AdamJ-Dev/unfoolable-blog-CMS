import styled from 'styled-components';
import { parseCssSize } from '../../../../lib/format/parse-css-size';
import { CssSize } from '../../../types/general';

type TextInputProps = {
  w?: CssSize;
};

const TextInput = styled.input<TextInputProps>`
  display: block;
  border-radius: 4px;
  padding: 5px;
  margin-bottom: 10px;
  width: ${({ w }) => parseCssSize(w, '200px')};
`;

export default TextInput;
