import { useEffect, RefObject } from 'react';

interface UseClickOutsideProps {
  ref: RefObject<HTMLDivElement>;
  handler: () => void;
  enabled?: boolean;
  excludeRefs?: RefObject<HTMLElement>[];
}

export const useClickOutside = ({ ref, handler, enabled = true, excludeRefs = [] }: UseClickOutsideProps) => {
  useEffect(() => {
    if (!enabled) return;

    const handleMouseDown = (event: MouseEvent) => {
      const target = event.target as Node;
      
      if (ref.current && !ref.current.contains(target)) {
        const isInExcludedRef = excludeRefs.some(
          excludeRef => excludeRef.current && excludeRef.current.contains(target)
        );
        
        if (!isInExcludedRef) {
          handler();
        }
      }
    };

    const handleTouchStart = (event: TouchEvent) => {
      const target = event.target as Node;
      
      if (ref.current && !ref.current.contains(target)) {
        const isInExcludedRef = excludeRefs.some(
          excludeRef => excludeRef.current && excludeRef.current.contains(target)
        );
        
        if (!isInExcludedRef) {
          handler();
        }
      }
    };

    // Add event listeners
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('touchstart', handleTouchStart);

    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('touchstart', handleTouchStart);
    };
  }, [ref, handler, enabled, excludeRefs]);
};
