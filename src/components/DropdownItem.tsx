import React from 'react';
import { DropdownItemProps } from '../types';

export const DropdownItem: React.FC<DropdownItemProps> = ({
  children,
  label = '',
  icon,
  disabled = false,
  danger = false,
  divider = false,
  onClick,
  className = '',
  'data-testid': testId
}) => {
  if (divider) {
    return <div className="asm-dropdown-divider" data-testid={testId} />;
  }

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;
    onClick?.(event);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      if (!disabled && onClick) {
        onClick(event as any);
      }
    }
  };

  return (
    <button
      type="button"
      className={`asm-dropdown-item ${danger ? 'asm-dropdown-item--danger' : ''} ${disabled ? 'asm-dropdown-item--disabled' : ''} ${className}`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      disabled={disabled}
      role="menuitem"
      tabIndex={-1}
      data-testid={testId}
    >
      {icon && (
        <span className="asm-dropdown-item__icon">
          {icon}
        </span>
      )}
      <span className="asm-dropdown-item__label">
        {label || children}
      </span>
    </button>
  );
};
