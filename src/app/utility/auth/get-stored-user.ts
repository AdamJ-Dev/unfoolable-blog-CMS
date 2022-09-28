import { getCookies, getCookieValue, selectCookie } from '../../../lib/document/cookies';
import { isJsonString } from '../../../lib/format/is-json-string';
import { isUndefined } from '../../../lib/type-guards/is-undefined';
import { USER_NOT_FOUND } from '../../constants/errors';

type StoredUser = {
  id?: string;
  token?: string;
  admin?: string;
};

export const getStoredUserClient = (): StoredUser => {
  const cookie = selectCookie('user', getCookies());
  if (cookie) {
    const user = getCookieValue(cookie);
    if (isJsonString(user)) {
      return JSON.parse(user);
    }
  }
  throw Error(USER_NOT_FOUND);
};

export const getStoredUserServer = (userCookie: string | undefined): StoredUser => {
  if (userCookie && isJsonString(userCookie)) {
    return JSON.parse(userCookie);
  }
  throw Error(USER_NOT_FOUND);
};

const getStoredUserInfo = (info: keyof StoredUser, storedUser: StoredUser) => {
  const storedInfo = storedUser[info];
  if (isUndefined(storedInfo)) {
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
