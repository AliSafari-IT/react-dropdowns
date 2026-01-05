import React, { useRef } from 'react';
import { createPortal } from 'react-dom';
import { DropdownProps } from '../types';
import { useDropdown } from '../hooks/useDropdown';
import { useClickOutside } from '../hooks/useClickOutside';
import { useKeyboardNavigation } from '../hooks/useKeyboardNavigation';
import { DropdownMenu } from './DropdownMenu';
import { DropdownItem } from './DropdownItem';
import { DropdownTrigger } from './DropdownTrigger';

export const Dropdown: React.FC<DropdownProps> = ({
  children,
  items = [],
  isOpen: controlledIsOpen,
  onToggle,
  placement = 'bottom-start',
  size = 'md',
  variant = 'primary',
  disabled = false,
  closeOnSelect = true,
  showChevron = true,
  className = '',
  'data-testid': testId
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const {
    isOpen: internalIsOpen,
    position,
    triggerRef,
    menuRef,
    toggle,
    close,
    handleItemClick
  } = useDropdown({
    placement,
    closeOnSelect
  });

  // Use controlled or internal state
  const isOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;
  
  const handleToggle = () => {
    if (disabled) return;
    
    if (onToggle) {
      onToggle(!isOpen);
    } else {
      toggle();
    }
  };

  const handleClose = () => {
    if (onToggle) {
      onToggle(false);
    } else {
      close();
    }
  };

  const handleItemSelect = (index: number) => {
    const item = items[index];
    if (item && !item.disabled && item.onClick) {
      item.onClick({} as React.MouseEvent<HTMLButtonElement>);
    }
    handleItemClick();
  };

  // Click outside to close
  useClickOutside({
    ref: containerRef,
    handler: handleClose,
    enabled: isOpen
  });

  // Keyboard navigation
  useKeyboardNavigation({
    isOpen,
    menuRef,
    onClose: handleClose,
    onSelect: handleItemSelect
  });

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleToggle();
    } else if (event.key === 'ArrowDown') {
      event.preventDefault();
      if (!isOpen) {
        handleToggle();
      }
    }
  };

  return (
    <div 
      ref={containerRef}
      className={`asm-dropdown ${className}`}
      data-testid={testId}
    >
      <DropdownTrigger
        ref={triggerRef}
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        variant={variant}
        size={size}
      >
        {children}
        {showChevron && (
          <svg 
            width="12" 
            height="12" 
            viewBox="0 0 12 12" 
            fill="currentColor"
            style={{ marginLeft: 'var(--asm-space-1)' }}
          >
            <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          </svg>
        )}
      </DropdownTrigger>

      {isOpen && createPortal(
        <DropdownMenu
          ref={menuRef}
          isOpen={isOpen}
          position={position}
          size={size}
          data-testid={testId ? `${testId}-menu` : undefined}
        >
          {items.map((item, index) => (
            <React.Fragment key={item.id || index}>
              {item.divider ? (
                <div className="asm-dropdown-divider" />
              ) : (
                <DropdownItem
                  label={item.label}
                  icon={item.icon}
                  disabled={item.disabled}
                  danger={item.danger}
                  onClick={(event) => {
                    if (item.onClick) {
                      item.onClick(event);
                    }
                    handleItemClick();
                  }}
                  data-testid={item.id ? `${testId}-item-${item.id}` : undefined}
                />
              )}
            </React.Fragment>
          ))}
        </DropdownMenu>,
        document.body
      )}
    </div>
  );
};
