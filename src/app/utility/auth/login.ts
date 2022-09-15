import { getLoginUrl } from '../../../../config/api/selectors';
import postAuth from './post-auth';
import { AuthRes } from '../../types/auth';

const login = async (username: string, password: string): Promise<AuthRes> => {
  return await postAuth(getLoginUrl(), { username, password });
};

export default login;
