import { useState, useEffect } from 'react';

export function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(null);

  useEffect(() => {
    if (window.innerWidth > 900) {
      setIsDesktop(true);
    } else {
      setIsDesktop(false);
    }

    function updateMedia() {
      if (window.innerWidth > 900) {
        setIsDesktop(true);
      } else {
        setIsDesktop(false);
      }
    }

    window.addEventListener('resize', updateMedia);

    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  return { isDesktop };
}
