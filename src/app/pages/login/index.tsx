import { useRouter } from 'next/router';
import { FormEvent, useState } from 'react';
import type { LoginForm } from '../../types/auth';
import Block from '../../components/styled/block/index.styled';
import Button from '../../components/styled/button/index.styled';
import Container from '../../components/styled/container/index.styled';
import InputLabel from '../../components/styled/input-label/index.styled';
import StyledNextLink from '../../components/styled/link/next-link.styled';
import TextInput from '../../components/styled/text-input/index.styled';
import login from '../../utility/auth/login';
import ErrorLog from '../../components/widgety/error-log';
import styles from '../../styles/auth.module.css';

const Login = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: FormEvent<LoginForm>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const username = form.username.value;
    const password = form.password.value;

    setIsLoading(true);
    const { error } = await login(username, password);
    if (error !== null) {
      setError(error);
      setIsLoading(false);
    } else {
      router.push('/blogs');
    }
  };

  return (
    <Container className={styles.authPageContainer}>
      <h1>Log In</h1>
      <div className={styles.authFormContainer}>
        <form onSubmit={handleLogin} spellCheck={false}>
          <InputLabel htmlFor="login-username">Username:</InputLabel>
          <TextInput
            type="text"
            id="login-username"
            className={styles.authInput}
            name="username"
            autoComplete="off"
            required
          />
          <InputLabel htmlFor="login-password">Password:</InputLabel>
          <TextInput
            type="password"
            id="login-password"
            className={styles.authInput}
            name="password"
            required
          />
          <Button type="submit">{isLoading ? 'Loading...' : 'Log In'}</Button>
          <Block>
            <span>Don&apos;t have an account? </span>
            <StyledNextLink href="/signup" linker="Sign Up" />
          </Block>
        </form>
        {error && <ErrorLog error={error} />}
      </div>
    </Container>
  );
};

export default Login;
