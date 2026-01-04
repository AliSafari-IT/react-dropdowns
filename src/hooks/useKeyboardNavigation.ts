import { useEffect, useCallback, RefObject } from 'react';

interface UseKeyboardNavigationProps {
  isOpen: boolean;
  menuRef: RefObject<HTMLElement>;
  onClose: () => void;
  onSelect?: (index: number) => void;
}

export const useKeyboardNavigation = ({
  isOpen,
  menuRef,
  onClose,
  onSelect
}: UseKeyboardNavigationProps) => {
  const getMenuItems = useCallback(() => {
    if (!menuRef.current) return [];
    return Array.from(
      menuRef.current.querySelectorAll('[role="menuitem"]:not([disabled])')
    ) as HTMLElement[];
  }, [menuRef]);

  const focusItem = useCallback((index: number) => {
    const items = getMenuItems();
    if (items[index]) {
      items[index].focus();
    }
  }, [getMenuItems]);

  const getCurrentIndex = useCallback(() => {
    const items = getMenuItems();
    const activeElement = document.activeElement as HTMLElement;
    return items.indexOf(activeElement);
  }, [getMenuItems]);

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (!isOpen) return;

    const items = getMenuItems();
    const currentIndex = getCurrentIndex();

    switch (event.key) {
      case 'Escape':
        event.preventDefault();
        onClose();
        break;

      case 'ArrowDown':
        event.preventDefault();
        if (items.length > 0) {
          const nextIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
          focusItem(nextIndex);
        }
        break;

      case 'ArrowUp':
        event.preventDefault();
        if (items.length > 0) {
          const prevIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
          focusItem(prevIndex);
        }
        break;

      case 'Home':
        event.preventDefault();
        if (items.length > 0) {
          focusItem(0);
        }
        break;

      case 'End':
        event.preventDefault();
        if (items.length > 0) {
          focusItem(items.length - 1);
        }
        break;

      case 'Enter':
      case ' ':
        event.preventDefault();
        if (currentIndex >= 0 && onSelect) {
          onSelect(currentIndex);
        }
        break;

      case 'Tab':
        onClose();
        break;
    }
  }, [isOpen, getMenuItems, getCurrentIndex, focusItem, onClose, onSelect]);

  useEffect(() => {
    if (!isOpen) return;

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleKeyDown]);

  // Focus first item when menu opens
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        focusItem(0);
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [isOpen, focusItem]);
};
