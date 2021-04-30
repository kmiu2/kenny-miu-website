import { useState, useLayoutEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

// Note: 
// - This is to fix the useMediaQuery defaulting to false on load.
export default function useResponsive() {
  const [isClient, setIsClient] = useState(false);

  const isMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  useLayoutEffect(() => {
    if (typeof window !== 'undefined')
      setIsClient(true)
  }, []);

  return {
    isMobile: isClient ? isMobile : false,
  };
}