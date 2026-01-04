import { useEffect, RefObject } from 'react';

interface UseClickOutsideProps {
  ref: RefObject<HTMLDivElement>;
  handler: () => void;
  enabled?: boolean;
}

export const useClickOutside = ({ ref, handler, enabled = true }: UseClickOutsideProps) => {
  useEffect(() => {
    if (!enabled) return;

    const handleMouseDown = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler();
      }
    };

    const handleTouchStart = (event: TouchEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler();
      }
    };

    // Add event listeners
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('touchstart', handleTouchStart);

    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('touchstart', handleTouchStart);
    };
  }, [ref, handler, enabled]);
};
