import { useEffect, useState } from 'react';

export const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState<boolean | null>(null);

  useEffect(() => {
    const media = window.matchMedia(`(max-width:${query}px)`);
    const listner = () => setMatches(media.matches);
    media.addEventListener('change', listner);
    return () => media.removeEventListener('change', listner);
  }, [query]);

  return matches;
};
