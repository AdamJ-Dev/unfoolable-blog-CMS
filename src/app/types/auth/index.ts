import { DBObjId } from '../general';

export type User = {
  _id: DBObjId;
  username: string;
  password: string;
  admin: boolean;
};

export type AuthRedirect = {
  type: 'protect' | 'align';
  to?: string;
};

type AuthSuccess = {
  user: User;
  error: null;
};

type AuthError = {
  user: undefined;
  error: string;
};

export type AuthRes = AuthSuccess | AuthError;

export type LoginForm = HTMLFormElement & {
  username: {
    value: string;
  };
  password: {
    value: string;
  };
};

export type SignupForm = HTMLFormElement & {
  username: {
    value: string;
  };
  password: {
    value: string;
  };
  confirm: {
    value: string;
  };
};
