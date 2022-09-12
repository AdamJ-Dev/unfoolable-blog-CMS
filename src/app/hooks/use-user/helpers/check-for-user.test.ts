import { deleteCookie, setCookie } from '../../../../lib/document/cookies';
import { USER_NOT_FOUND } from '../../../constants/errors';
import { checkForUser } from './check-for-user';

const JWT = '';
const FAIL_ID = 'invalid';

// mock fetchUser
jest.mock('../../../utility/data-fetching/fetch-user', () =>
  jest.fn((id: string) => {
    if (id === FAIL_ID) {
      throw Error(USER_NOT_FOUND);
    } else {
      return { id, token: JWT };
    }
  })
);

// possible users in the cookies
const userExamples = {
  valid: {
    id: 'valid',
    token: JWT,
  },
  invalid: {
    id: FAIL_ID,
    token: JWT,
  },
};

describe('@src/app/pages/hooks/use-user/helpers/check-for-user', () => {
  afterEach(() => {
    deleteCookie('user');
  });
  it('finds the user when a valid user is in the cookies', async () => {
    setCookie('user', JSON.stringify(userExamples.valid));
    const userInfo = await checkForUser();
    expect(userInfo).toEqual(userExamples.valid);
  });

  it('fails to find the user when an invalid user is in the cookies', async () => {
    setCookie('user', JSON.stringify(userExamples.invalid));
    const userInfo = await checkForUser();
    expect(userInfo).toEqual(undefined);
  });

  it('fails to find the user when no user is in the cookies', async () => {
    const userInfo = await checkForUser();
    expect(userInfo).toEqual(undefined);
  });
});
