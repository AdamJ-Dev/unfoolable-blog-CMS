import { User } from '../../../types';
import fetchUser from '../../../utility/data-fetching/fetch-user';
import { getErrorMessage } from '../../../utility/data-fetching/get-error-message';
import { getStoredUser, getStoredUserId } from '../../../utility/auth/get-stored-user';

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
