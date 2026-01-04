import React from 'react';
import { DropdownTriggerProps } from '../types';

export const DropdownTrigger = React.forwardRef<HTMLElement, DropdownTriggerProps>(({
  children,
  onClick,
  onKeyDown,
  disabled = false,
  className = '',
  'data-testid': testId
}, ref) => {
  // Check if children is already a button element
  const isButtonChild = React.isValidElement(children) && 
    (children.type === 'button' || 
     (typeof children.type === 'string' && children.type === 'button'));

  if (isButtonChild) {
    // Clone the button and add our props
    return React.cloneElement(children as React.ReactElement<any>, {
      className: `${(children as any).props.className || ''} asm-dropdown-trigger ${className}`.trim(),
      onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
        onClick?.(e);
        (children as any).props.onClick?.(e);
      },
      onKeyDown: (e: React.KeyboardEvent<HTMLButtonElement>) => {
        onKeyDown?.(e);
        (children as any).props.onKeyDown?.(e);
      },
      disabled: disabled || (children as any).props.disabled,
      'aria-haspopup': 'menu',
      'aria-expanded': false,
      'data-testid': testId || (children as any).props['data-testid'],
      ref: ref
    });
  }

  // For non-button children, wrap in a button
  return (
    <button
      ref={ref as React.RefObject<HTMLButtonElement>}
      type="button"
      className={`asm-dropdown-trigger ${className}`}
      onClick={onClick}
      onKeyDown={onKeyDown}
      disabled={disabled}
      aria-haspopup="menu"
      aria-expanded={false}
      data-testid={testId}
    >
      {children}
    </button>
  );
});
