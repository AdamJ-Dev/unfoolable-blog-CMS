import styled from 'styled-components';

type CommentAuthorProps = {
  isUser: boolean;
  isAdmin: boolean;
};

const CommentAuthor = styled.h3<CommentAuthorProps>`
  color: ${(props) => {
    return props.isUser && props.theme.colours[props.isAdmin ? 'admin' : 'user'];
  }};
`;

export default CommentAuthor;
