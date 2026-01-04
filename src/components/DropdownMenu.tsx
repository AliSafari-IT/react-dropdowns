import React, { forwardRef } from 'react';
import { DropdownMenuProps } from '../types';

export const DropdownMenu = forwardRef<HTMLDivElement, DropdownMenuProps>(({
  children,
  isOpen,
  position,
  size = 'md',
  className = '',
  'data-testid': testId
}, ref) => {
  if (!isOpen) return null;

  const positionStyles: React.CSSProperties = {
    position: 'fixed',
    zIndex: 1000,
    ...position
  };

  return (
    <div
      ref={ref}
      className={`asm-dropdown-menu asm-dropdown-menu--${size} ${className}`}
      style={positionStyles}
      role="menu"
      aria-orientation="vertical"
      data-testid={testId}
    >
      {children}
    </div>
  );
});

DropdownMenu.displayName = 'DropdownMenu';
