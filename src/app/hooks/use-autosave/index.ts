import { useEffect } from 'react';
import { getAutosaveInterval } from '../../../../config/pages/selectors';
import { clearStorage, getCache, getLatest, setCache, setLatest } from '../../../lib/document/local-storage';

const useAutosave = <T extends Record<string, unknown>>(
  state: T,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  saver: (updates: T) => Promise<void>
) => {
  useEffect(() => {
    const orginal = JSON.stringify(state);
    setCache(orginal);
    setLatest(orginal);

    setInterval(async () => {
      const cache = getCache();
      const latest = getLatest();
      if (latest && cache !== latest) {
        setCache(latest);
        await saver(JSON.parse(latest));
      }
    }, getAutosaveInterval());

    return () => clearStorage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setLatest(JSON.stringify(state));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(state)]);
};

export default useAutosave;
