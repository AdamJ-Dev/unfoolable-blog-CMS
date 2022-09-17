import { CustomForm, DBObjId } from '../general';

export type UserCookie = {
  id: string;
  token: string;
  admin?: string;
};

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

export type LoginForm = CustomForm<'username' | 'password'>;

export type SignupForm = CustomForm<'username' | 'password' | 'confirm'>;
