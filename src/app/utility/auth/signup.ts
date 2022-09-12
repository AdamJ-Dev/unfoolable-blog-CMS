import { getSignupUrl } from '../../../../config/api/selectors';
import { PASSWORDS_DONT_MATCH } from '../../constants/errors';
import type { AuthRes } from './types';
import postAuth from './post-auth';

const signup = async (username: string, password: string, confirm: string): Promise<AuthRes> => {
  if (password !== confirm) {
    return {
      user: undefined,
      error: PASSWORDS_DONT_MATCH,
    };
  }

  return await postAuth(getSignupUrl(), { username, password });
};

export default signup;
