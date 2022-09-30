import { getLoginUrl } from '../../../../config/api/selectors';
import postAuth from './post-auth';
import { AuthRes } from '../../types/auth';
import { setCookie } from '../../../lib/document/cookies';

const login = async (username: string, password: string): Promise<AuthRes> => {
  const res = await postAuth(getLoginUrl(), { username, password });
  if (res.user) {
    setCookie('user', JSON.stringify(res.user));
  }
  return res;
};

export default login;
