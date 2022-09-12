import { useEffect, useState } from 'react';
import { checkForUser, ErrorData, UserData } from './helpers/check-for-user';

const useUser = () => {
  const [user, setUser] = useState<UserData>(undefined);
  const [error, setError] = useState<ErrorData>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const establishUser = async () => {
      setLoading(true);
      const { user, error } = await checkForUser();
      if (user) setUser(user);
      if (error) setError(error);
      setLoading(false);
    };
    establishUser();
  }, []);

  return { user, error, loading };
};

export default useUser;
