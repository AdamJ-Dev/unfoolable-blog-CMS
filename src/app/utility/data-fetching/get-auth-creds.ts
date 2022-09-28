import { getStoredUserClient, getStoredUserServer, getStoredUserToken } from '../auth/get-stored-user';

export const getAuthTokenClient = () => {
  try {
    const user = getStoredUserClient();
    const token = getStoredUserToken(user);
    return `Bearer ${token}`;
  } catch (error) {
    console.log(error);
    return '';
  }
};

export const getAuthHeaderClient = () => {
  return {
    Authorization: getAuthTokenClient(),
  };
};

export const getAuthTokenServer = (userCookie: string | undefined) => {
  try {
    const user = getStoredUserServer(userCookie);
    const token = getStoredUserToken(user);
    return `Bearer ${token}`;
  } catch (error) {
    return '';
  }
};

export const getAuthHeaderServer = (userCookie: string | undefined) => {
  return {
    Authorization: getAuthTokenServer(userCookie),
  };
};
