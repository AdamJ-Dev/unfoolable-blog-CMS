import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { AuthRedirect } from '../../types/auth';
import useUser from '../../hooks/use-user';
import { isFetchResolved } from '../../utility/data-fetching/is-fetch-resolved';
import Container from '../styled/container/index.styled';

type AuthWrapProps = {
  children: React.ReactNode;
  authRedirect: AuthRedirect;
};

const AuthWrap: React.FC<AuthWrapProps> = ({ children, authRedirect }) => {
  const router = useRouter();
  const { user, error, loading } = useUser();
  const [shouldRender, setShouldRender] = useState(false);

  const protectRoute = () => {
    const isntAuthed = Boolean(error);
    if (isntAuthed) {
      router.push('/login');
    } else {
      setShouldRender(true);
    }
  };

  const alignRoute = () => {
    const isAuthed = Boolean(user);
    if (isAuthed) {
      router.push(authRedirect.to || '/');
    } else {
      setShouldRender(true);
    }
  };

  useEffect(() => {
    if (isFetchResolved(user, error)) {
      switch (authRedirect.type) {
        case 'protect':
          protectRoute();
          break;
        case 'align':
          alignRoute();
          break;
      }
    }
  }, [user, error, loading]);

  return (
    <>
      {loading ? (
        <Container>
          <p>Loading...</p>
        </Container>
      ) : (
        shouldRender && <>{children}</>
      )}
    </>
  );
};

export default AuthWrap;
