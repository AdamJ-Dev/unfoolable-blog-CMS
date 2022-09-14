export type User = {
  id: string;
  token: string;
  admin: boolean;
};

export type Cookies = Record<string, string | undefined>;

export type AuthRedirect = {
  type: 'protect' | 'align';
  to?: string;
};
