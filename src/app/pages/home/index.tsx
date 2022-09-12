import React from 'react';
import AuthWrap from '../../components/auth-wrap';
import Container from '../../components/styled/container/index.styled';
import StyledNextLink from '../../components/styled/link/next-link.styled';

const authRedirect = {
  type: 'align' as const,
  to: '/blogs',
};

const Home: React.FC = () => {
  return (
    <AuthWrap authRedirect={authRedirect}>
      <Container>
        <h1>Welcome back</h1>
        <StyledNextLink href="/login" linker="Log In" />
        <span>&nbsp;/&nbsp;</span>
        <StyledNextLink href="/signup" linker="Sign Up" />
      </Container>
    </AuthWrap>
  );
};

export default Home;
