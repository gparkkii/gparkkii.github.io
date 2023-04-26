import { useEffect, useState } from 'react';

export const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaMatch = window.matchMedia(`(max-width:${query})`);
      const handler = (e: MediaQueryListEvent) => setMatches(e.matches);
      mediaMatch.addEventListener('change', handler);
      return () => mediaMatch.removeEventListener('change', handler);
    }
    return;
  });
  return matches;
};
