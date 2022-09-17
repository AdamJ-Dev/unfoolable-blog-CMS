import { getStoredUser, getStoredUserToken } from '../auth/get-stored-user';

export const getAuthToken = () => {
  try {
    const user = getStoredUser();
    const token = getStoredUserToken(user);
    return `Bearer ${token}`;
  } catch (error) {
    return '';
  }
};

export const getAuthHeader = () => {
  return {
    Authorization: getAuthToken(),
  };
};
