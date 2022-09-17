import { postJson } from '../../../lib/data-fetching/post-json';
import { AuthRes } from '../../types/auth';

const postAuth = async (url: string, body: Record<string, unknown>): Promise<AuthRes> => {
  const res = await postJson(url, body);
  const data = await res.json();

  if (!res.ok) {
    return {
      user: undefined,
      error: data.error,
    };
  }

  return {
    user: data.user,
    error: null,
  };
};

export default postAuth;
