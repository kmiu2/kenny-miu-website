import { useState, useLayoutEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

// Note: 
// - This is to fix the useMediaQuery defaulting to false on load.
export default function useResponsive(width: number) {
  const [isClient, setIsClient] = useState(false);

  const isMobile = useMediaQuery({ query: `(max-width: ${width}px)` })

  useLayoutEffect(() => {
    if (typeof window !== 'undefined')
      setIsClient(true)
  }, []);

  return isMobile;
}

// import { useState, useCallback, useEffect } from 'react';

// const useResponsive = (width: number) => {
//   const [targetReached, setTargetReached] = useState(false);

//   const updateTarget = useCallback((e) => {
//     if (e.matches) {
//       setTargetReached(true);
//     } else {
//       setTargetReached(false);
//     }
//   }, []);

//   useEffect(() => {
//     const media = window.matchMedia(`(max-width: ${width}px)`)
//     media.addEventListener('change', e => updateTarget(e))

//     // Check on mount (callback is not called until a change occurs)
//     if (media.matches) {
//       setTargetReached(true)
//     }

//     return () => media.removeEventListener('change', e => updateTarget(e))
//   }, [])

//   return targetReached;
// };

// export default useResponsive;

// import { useState, useEffect } from 'react';

// export default function useResponsive(width: number) {

//   const hasWindow = typeof window !== 'undefined';

//   function getWindowDimensions() {
//     const width = hasWindow ? window.innerWidth : 2000;
//     const height = hasWindow ? window.innerHeight : 2000;
//     return {
//       width,
//       height,
//     };
//   }

//   const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

//   useEffect(() => {
//     if (hasWindow) {
//       function handleResize() {
//         setWindowDimensions(getWindowDimensions());
//       }

//       window.addEventListener('resize', handleResize);
//       return () => window.removeEventListener('resize', handleResize);
//     }
//   }, [hasWindow]);

//   return windowDimensions.width < 1224;
// }