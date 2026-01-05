import { ReactNode, MouseEvent, KeyboardEvent } from 'react';

export type DropdownPlacement = 
  | 'top' | 'top-start' | 'top-end'
  | 'bottom' | 'bottom-start' | 'bottom-end'
  | 'left' | 'left-start' | 'left-end'
  | 'right' | 'right-start' | 'right-end';

export type DropdownSize = 'sm' | 'md' | 'lg';
export type DropdownVariant = 
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'ghost'
  | 'outline'
  | 'link'
  | 'brand';

export interface DropdownPosition {
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
  transform?: string;
}

export interface DropdownItemData {
  id?: string;
  label: string;
  value?: string;
  icon?: ReactNode;
  disabled?: boolean;
  danger?: boolean;
  divider?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export interface DropdownProps {
  children: ReactNode;
  items?: DropdownItemData[];
  isOpen?: boolean;
  onToggle?: (isOpen: boolean) => void;
  placement?: DropdownPlacement;
  size?: DropdownSize;
  variant?: DropdownVariant;
  disabled?: boolean;
  closeOnSelect?: boolean;
  showChevron?: boolean;
  className?: string;
  'data-testid'?: string;
}

export interface DropdownItemProps {
  children?: ReactNode;
  label?: string;
  icon?: ReactNode;
  disabled?: boolean;
  danger?: boolean;
  divider?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  'data-testid'?: string;
}

export interface DropdownMenuProps {
  children: ReactNode;
  isOpen: boolean;
  position: DropdownPosition;
  size?: DropdownSize;
  className?: string;
  'data-testid'?: string;
}

export interface DropdownTriggerProps {
  children: ReactNode;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  variant?: DropdownVariant;
  size?: DropdownSize;
  className?: string;
  'data-testid'?: string;
}
