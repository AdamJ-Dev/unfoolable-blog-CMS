import styled from 'styled-components';

const Textarea = styled.textarea`
  display: block;
  font-family: Arial, Helvetica, sans-serif;
  border: 2px solid black;
  border-radius: 4px;
  resize: vertical;

  &:focus {
    outline: none;
  }
`;

export default Textarea;
