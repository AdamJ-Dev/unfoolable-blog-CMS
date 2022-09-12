import { getCookies, getCookieValue, selectCookie } from '../../../../lib/document/cookies';
import { isJsonString } from '../../../../lib/format/is-json-string';
import { User } from '../../../types';
import { USER_NOT_FOUND } from '../../../constants/errors';
import fetchUser from '../../../utility/data-fetching/fetch-user';
import { getErrorMessage } from '../../../utility/data-fetching/get-error-message';

type StoredUser = {
  id?: string;
};

const getStoredUser = (): StoredUser => {
  const cookie = selectCookie('user', getCookies());
  if (cookie) {
    const user = getCookieValue(cookie);
    if (isJsonString(user)) {
      return JSON.parse(user);
    }
  }
  throw Error(USER_NOT_FOUND);
};

const getStoredUserId = (storedUser: StoredUser) => {
  const { id } = storedUser;
  if (!id) {
    throw Error(USER_NOT_FOUND);
  } else {
    return id;
  }
};

const getActualUser = async (id: string) => {
  const user = await fetchUser(id);
  return user;
};

export type UserData = User | undefined;
export type ErrorData = string | null;

type UserRes = {
  user: UserData;
  error: ErrorData;
};

export const checkForUser = async (): Promise<UserRes> => {
  try {
    const storedUser = getStoredUser();
    const actualUser = await getActualUser(getStoredUserId(storedUser));
    return { user: actualUser, error: null };
  } catch (error) {
    return { user: undefined, error: getErrorMessage(error) };
  }
};
