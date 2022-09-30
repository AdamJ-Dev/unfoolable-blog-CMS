import { getSignupUrl } from '../../../../config/api/selectors';
import { setCookie } from '../../../lib/document/cookies';
import { PASSWORDS_DONT_MATCH } from '../../constants/errors';
import type { AuthRes } from '../../types/auth';
import postAuth from './post-auth';

const signup = async (username: string, password: string, confirm: string): Promise<AuthRes> => {
  if (password !== confirm) {
    return {
      user: undefined,
      error: PASSWORDS_DONT_MATCH,
    };
  }

  const res = await postAuth(getSignupUrl(), { username, password });
  if (res.user) {
    setCookie('user', JSON.stringify(res.user));
  }
  return res;
};

export default signup;
