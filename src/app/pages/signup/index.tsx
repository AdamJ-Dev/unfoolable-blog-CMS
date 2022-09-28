import { useRouter } from 'next/router';
import { FormEvent, useState } from 'react';
import {
  getPasscodeSignupSpec,
  getPasswordSignupSpec,
  getUsernameSignupSpec,
} from '../../../../config/signup/selectors';
import { getBlogsPath, getLoginPath } from '../../../../config/pages/selectors';
import type { SignupForm } from '../../types/auth';
import Expander from '../../components/widgety/expander';
import Block from '../../components/styled/block/index.styled';
import Button from '../../components/styled/button/index.styled';
import Container from '../../components/styled/container/index.styled';
import InputLabel from '../../components/styled/input-label/index.styled';
import StyledNextLink from '../../components/styled/link/next-link.styled';
import TextInput from '../../components/styled/text-input/index.styled';
import signup from '../../utility/auth/signup';
import ErrorLog from '../../components/widgety/error-log';
import styles from '../../styles/auth.module.css';

const Signup = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSignup = async (e: FormEvent<SignupForm>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const username = form.username.value;
    const password = form.password.value;
    const confirm = form.confirm.value;

    setIsLoading(true);
    const { error } = await signup(username, password, confirm);

    if (error !== null) {
      setError(error);
      setIsLoading(false);
    } else {
      router.push(getBlogsPath());
    }
  };

  return (
    <Container className={styles.authPageContainer}>
      <h1>Sign Up</h1>
      <div className={styles.authFormContainer}>
        <form onSubmit={handleSignup} spellCheck={false}>
          <Expander
            target={<InputLabel htmlFor="signup-username">Username</InputLabel>}
            details={<small>{getUsernameSignupSpec()}</small>}
          />
          <TextInput
            type="text"
            id="signup-username"
            className={styles.authInput}
            name="username"
            autoComplete="off"
            required
          />
          <Expander
            target={<InputLabel htmlFor="signup-password">Password</InputLabel>}
            details={<small>{getPasswordSignupSpec()}</small>}
          />
          <TextInput
            type="password"
            id="signup-password"
            className={styles.authInput}
            name="password"
            required
          />
          <InputLabel htmlFor="signup-confirm-password">Confirm Password</InputLabel>
          <TextInput
            type="password"
            id="signup-confirm-password"
            className={styles.authInput}
            name="confirm"
            required
          />
          <Expander
            target={<InputLabel htmlFor="signup-passcode">Passcode</InputLabel>}
            details={<small>{getPasscodeSignupSpec()}</small>}
          />
          <TextInput
            type="password"
            id="signup-passcode"
            className={styles.authInput}
            name="passcode"
            required
          />
          <Button type="submit">{isLoading ? 'Loading..' : 'Sign Up'}</Button>
          <Block>
            <span>Already have an account? </span>
            <StyledNextLink href={getLoginPath()} linker="Log In" />
          </Block>
        </form>
        {error && <ErrorLog error={error} />}
      </div>
    </Container>
  );
};

export default Signup;
