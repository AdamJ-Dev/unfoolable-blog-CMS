import { getCookieValue, selectCookie } from '../../../lib/document/cookies';
import { isJsonString } from '../../../lib/format/is-json-string';
import { USER_NOT_FOUND } from '../../constants/errors';

type StoredUser = {
  id?: string;
  token?: string;
};

export const getStoredUser = (): StoredUser => {
  const cookie = selectCookie('user');
  if (cookie) {
    const user = getCookieValue(cookie);
    if (isJsonString(user)) {
      return JSON.parse(user);
    }
  }
  throw Error(USER_NOT_FOUND);
};

export const getStoredUserId = (storedUser: StoredUser) => {
  const { id } = storedUser;
  if (!id) {
    throw Error(USER_NOT_FOUND);
  } else {
    return id;
  }
};

export const getStoredUserToken = (storedUser: StoredUser) => {
  const { token } = storedUser;
  if (!token) {
    throw Error(USER_NOT_FOUND);
  } else {
    return token;
  }
};
