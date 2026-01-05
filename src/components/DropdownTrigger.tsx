import React from 'react';
import { DropdownTriggerProps } from '../types';
import styles from './DropdownTrigger.module.css';

export const DropdownTrigger = React.forwardRef<HTMLElement, DropdownTriggerProps>(({
  children,
  onClick,
  onKeyDown,
  disabled = false,
  variant = 'primary',
  size = 'md',
  className = '',
  'data-testid': testId
}, ref) => {
  const variantClass = styles[variant] || styles.primary;
  const sizeClass = styles[size] || styles.md;
  const triggerClass = `${styles.trigger} ${variantClass} ${sizeClass} ${className}`.trim();

  // Check if children is already a button element
  const isButtonChild = React.isValidElement(children) && 
    (children.type === 'button' || 
     (typeof children.type === 'string' && children.type === 'button'));

  if (isButtonChild) {
    // Clone the button and add our props
    return React.cloneElement(children as React.ReactElement<any>, {
      className: `${(children as any).props.className || ''} ${triggerClass}`.trim(),
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
      className={triggerClass}
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
