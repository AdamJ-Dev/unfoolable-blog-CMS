import { User } from '../../../types/auth';
import fetchUser from '../../../utility/data-fetching/fetch-user';
import { getErrorMessage } from '../../../utility/data-fetching/get-error-message';
import {
  getStoredUserClient,
  getStoredUserAdmin,
  getStoredUserId,
} from '../../../utility/auth/get-stored-user';

export type UserData = User | undefined;
export type ErrorData = string | null;

type UserRes = {
  user: UserData;
  error: ErrorData;
};

export const checkForUser = async (): Promise<UserRes> => {
  try {
    const storedUser = getStoredUserClient();
    const actualUser = await fetchUser(getStoredUserId(storedUser));
    return { user: actualUser, error: null };
  } catch (error) {
    return { user: undefined, error: getErrorMessage(error) };
  }
};

export const checkForAdminship = () => {
  try {
    const storedUser = getStoredUserClient();
    const isAdmin = Boolean(getStoredUserAdmin(storedUser));
    return { isAdmin, error: null };
  } catch (error) {
    return { isAdmin: false, error };
  }
};
