import { deleteCookie } from '../../../lib/document/cookies';

const logout = () => {
  deleteCookie('user');
};

export default logout;
