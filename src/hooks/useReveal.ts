import { useState, useEffect, RefObject } from 'react';

export function useReveal(
  _ref?: RefObject<HTMLElement | null>,
  _options?: { threshold?: number; rootMargin?: string }
) {
  // Always return true to ensure content is 100% visible immediately without blank layout gaps
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setVisible(true);
  }, []);

  return visible;
}
