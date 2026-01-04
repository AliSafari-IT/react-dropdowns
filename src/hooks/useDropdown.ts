import { useState, useRef, useCallback, useEffect } from 'react';
import { DropdownPlacement, DropdownPosition } from '../types';

interface UseDropdownProps {
  placement?: DropdownPlacement;
  offset?: number;
  closeOnSelect?: boolean;
}

export const useDropdown = ({
  placement = 'bottom-start',
  offset = 8,
  closeOnSelect = true
}: UseDropdownProps = {}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState<DropdownPosition>({});
  const triggerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const calculatePosition = useCallback(() => {
    if (!triggerRef.current || !menuRef.current) return;

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const menuRect = menuRef.current.getBoundingClientRect();
    const viewport = {
      width: window.innerWidth,
      height: window.innerHeight
    };

    let newPosition: DropdownPosition = {};

    // Calculate base position based on placement
    switch (placement) {
      case 'top':
        newPosition = {
          bottom: viewport.height - triggerRect.top + offset,
          left: triggerRect.left + (triggerRect.width - menuRect.width) / 2
        };
        break;
      case 'top-start':
        newPosition = {
          bottom: viewport.height - triggerRect.top + offset,
          left: triggerRect.left
        };
        break;
      case 'top-end':
        newPosition = {
          bottom: viewport.height - triggerRect.top + offset,
          right: viewport.width - triggerRect.right
        };
        break;
      case 'bottom':
        newPosition = {
          top: triggerRect.bottom + offset,
          left: triggerRect.left + (triggerRect.width - menuRect.width) / 2
        };
        break;
      case 'bottom-start':
        newPosition = {
          top: triggerRect.bottom + offset,
          left: triggerRect.left
        };
        break;
      case 'bottom-end':
        newPosition = {
          top: triggerRect.bottom + offset,
          right: viewport.width - triggerRect.right
        };
        break;
      case 'left':
        newPosition = {
          top: triggerRect.top + (triggerRect.height - menuRect.height) / 2,
          right: viewport.width - triggerRect.left + offset
        };
        break;
      case 'left-start':
        newPosition = {
          top: triggerRect.top,
          right: viewport.width - triggerRect.left + offset
        };
        break;
      case 'left-end':
        newPosition = {
          bottom: viewport.height - triggerRect.bottom,
          right: viewport.width - triggerRect.left + offset
        };
        break;
      case 'right':
        newPosition = {
          top: triggerRect.top + (triggerRect.height - menuRect.height) / 2,
          left: triggerRect.right + offset
        };
        break;
      case 'right-start':
        newPosition = {
          top: triggerRect.top,
          left: triggerRect.right + offset
        };
        break;
      case 'right-end':
        newPosition = {
          bottom: viewport.height - triggerRect.bottom,
          left: triggerRect.right + offset
        };
        break;
    }

    // Adjust for viewport boundaries
    if (newPosition.left !== undefined) {
      if (newPosition.left < 0) {
        newPosition.left = 8;
      } else if (newPosition.left + menuRect.width > viewport.width) {
        newPosition.left = viewport.width - menuRect.width - 8;
      }
    }

    if (newPosition.right !== undefined) {
      if (newPosition.right < 0) {
        newPosition.right = 8;
      }
    }

    if (newPosition.top !== undefined) {
      if (newPosition.top < 0) {
        newPosition.top = 8;
      } else if (newPosition.top + menuRect.height > viewport.height) {
        newPosition.top = viewport.height - menuRect.height - 8;
      }
    }

    if (newPosition.bottom !== undefined) {
      if (newPosition.bottom < 0) {
        newPosition.bottom = 8;
      }
    }

    setPosition(newPosition);
  }, [placement, offset]);

  const toggle = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleItemClick = useCallback(() => {
    if (closeOnSelect) {
      close();
    }
  }, [closeOnSelect, close]);

  // Recalculate position when opened
  useEffect(() => {
    if (isOpen) {
      // Small delay to ensure DOM is updated
      const timer = setTimeout(calculatePosition, 0);
      return () => clearTimeout(timer);
    }
  }, [isOpen, calculatePosition]);

  // Recalculate position on window resize and scroll
  useEffect(() => {
    if (!isOpen) return;

    const handleResize = () => calculatePosition();
    const handleScroll = () => calculatePosition();
    
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen, calculatePosition]);

  return {
    isOpen,
    position,
    triggerRef,
    menuRef,
    toggle,
    open,
    close,
    handleItemClick
  };
};
