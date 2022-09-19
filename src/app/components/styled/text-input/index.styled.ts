import styled from 'styled-components';
import { parseCssSize } from '../../../../lib/format/parse-css-size';
import { CssSize } from '../../../types/general';

const TextInput = styled.input`
  display: block;
  border-radius: 4px;
  padding: 5px;
  margin-bottom: 10px;
`;

export default TextInput;
