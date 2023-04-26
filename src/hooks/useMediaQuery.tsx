import { useCallback, useEffect, useState } from 'react';

export const useMediaQuery = (query: string) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback(e => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const media = window.matchMedia(`(max-width:${query}px)`);
      media.addEventListener('change', updateTarget);
      if (media.matches) {
        setTargetReached(true);
      }

      return () => media.removeEventListener('change', updateTarget);
    }
  }, []);
  return targetReached;
};
