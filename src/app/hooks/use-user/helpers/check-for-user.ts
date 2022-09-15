import { User } from '../../../types/auth';
import fetchUser from '../../../utility/data-fetching/fetch-user';
import { getErrorMessage } from '../../../utility/data-fetching/get-error-message';
import { getStoredUser, getStoredUserId } from '../../../utility/auth/get-stored-user';

export type UserData = User | undefined;
export type ErrorData = string | null;

type UserRes = {
  user: UserData;
  error: ErrorData;
};

export const checkForUser = async (): Promise<UserRes> => {
  try {
    const storedUser = getStoredUser();
    const actualUser = await fetchUser(getStoredUserId(storedUser));
    return { user: actualUser, error: null };
  } catch (error) {
    return { user: undefined, error: getErrorMessage(error) };
  }
};
