import { getFindUserUrl } from '../../../../config/api/selectors';
import { User } from '../../types/auth';
import { USER_NOT_FOUND } from '../../constants/errors';

const fetchUser = async (id: string): Promise<User> => {
  const res = await fetch(getFindUserUrl(id));

  if (!res.ok) {
    throw Error(USER_NOT_FOUND);
  }

  const user = await res.json();
  return user;
};

export default fetchUser;
