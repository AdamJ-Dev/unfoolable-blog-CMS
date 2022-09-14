import { getCookieValue, selectCookie } from '../../../lib/document/cookies';
import { isJsonString } from '../../../lib/format/is-json-string';
import { USER_NOT_FOUND } from '../../constants/errors';

type StoredUser = {
  id?: string;
  token?: string;
  admin?: string;
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

const getStoredUserInfo = (info: keyof StoredUser, storedUser: StoredUser) => {
  const storedInfo = storedUser[info];
  if (!storedInfo) {
    throw Error(USER_NOT_FOUND);
  } else {
    return storedInfo;
  }
};

export const getStoredUserId = (storedUser: StoredUser) => {
  return getStoredUserInfo('id', storedUser);
};

export const getStoredUserToken = (storedUser: StoredUser) => {
  return getStoredUserInfo('token', storedUser);
};

export const getStoredUserAdmin = (storedUser: StoredUser) => {
  return getStoredUserInfo('admin', storedUser);
};
