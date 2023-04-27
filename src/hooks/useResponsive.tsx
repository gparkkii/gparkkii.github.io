import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

export function useResponsive(breakpoints: string) {
  const [matches, setMatches] = useState(false);
  const mobile = useMediaQuery({ query: `(max-width:${breakpoints})` });

  useEffect(() => {
    setMatches(mobile);
  }, [mobile]);

  return matches;
}
