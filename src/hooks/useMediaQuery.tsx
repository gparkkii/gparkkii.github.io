import { useEffect, useState } from 'react';

export const useMediaQuery = (query: string) => {
  const mediaMatch = window.matchMedia(`(max-width:${query})`);
  const [matches, setMatches] = useState(mediaMatch.matches);

  useEffect(() => {
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches);
    mediaMatch.addEventListener('change', handler);
    return () => mediaMatch.removeEventListener('change', handler);
  });
  return matches;
};
