import { renderHook } from '@testing-library/react-hooks';
import { waitFor } from '@testing-library/react';
import { checkForUser } from './helpers/check-for-user';
import useUser from '.';

const results = {
  found: {
    user: {
      id: 1,
      token: '',
    },
    loading: false,
  },
  notFound: {
    user: undefined,
    loading: false,
  },
  waiting: {
    user: undefined,
    loading: true,
  },
};

jest.mock('./helpers/check-for-user', () => ({
  __esmodule: true,
  ...jest.requireActual('./helpers/check-for-user'),
  checkForUser: jest.fn(),
}));

const waitOneSec = (value: any) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value);
    }, 1000);
  });
};

jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');

describe('@src/app/hooks/use-user', () => {
  afterEach(() => {
    (checkForUser as jest.Mock).mockReset();
  });
  it('returns loading state while waiting for a fetch', () => {
    (checkForUser as jest.Mock).mockImplementation(() => waitOneSec(results.found));
    const { result } = renderHook(() => useUser());
    jest.advanceTimersByTime(500);
    expect(result.current).toEqual(results.waiting);
  });

  it('returns the found-user state after the user is found', () => {
    (checkForUser as jest.Mock).mockImplementation(() => waitOneSec(results.found));
    const { result } = renderHook(() => useUser());
    jest.advanceTimersByTime(1000);
    waitFor(() => expect(result.current).toEqual(results.found));
  });

  it('returns the not-found-user state after the user has not been found', () => {
    (checkForUser as jest.Mock).mockImplementation(() => waitOneSec(results.notFound));
    const { result } = renderHook(() => useUser());
    jest.advanceTimersByTime(1000);
    waitFor(() => expect(result.current).toEqual(results.notFound));
  });
});
