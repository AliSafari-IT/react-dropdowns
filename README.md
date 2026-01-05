# @asafarim/react-dropdowns

Comprehensive, accessible, and mobile-first dropdown components for React with TypeScript support.

## Features

- 🎯 **Comprehensive**: Multiple components for different use cases
- ♿ **Accessible**: Full keyboard navigation and screen reader support
- 📱 **Mobile-First**: Optimized for touch devices with responsive design
- 🎨 **Themeable**: Uses ASafariM design tokens with dark theme support
- 🔧 **TypeScript**: Full type safety and IntelliSense support
- ⚡ **Performant**: Lightweight with minimal dependencies
- 🎪 **Flexible**: Multiple placement options and customization

## Installation

```bash
npm install @asafarim/react-dropdowns
# or
yarn add @asafarim/react-dropdowns
# or
pnpm add @asafarim/react-dropdowns
```

## Quick Start

```tsx
import { Dropdown } from '@asafarim/react-dropdowns';
import '@asafarim/react-dropdowns/dist/dropdown.css';

function App() {
  return (
    <Dropdown
      items={[
        {
          id: 'edit',
          label: 'Edit',
          onClick: () => console.log('Edit clicked')
        },
        {
          id: 'delete',
          label: 'Delete',
          danger: true,
          onClick: () => console.log('Delete clicked')
        }
      ]}
      placement="bottom-start"
    >
      <button>Actions</button>
    </Dropdown>
  );
}
```

## Components

### Dropdown

The main dropdown component that combines trigger and menu functionality.

```tsx
<Dropdown
  items={[
    {
      id: 'option1',
      label: 'Option 1',
      icon: <Icon />,
      onClick: () => {},
      disabled: false,
      danger: false
    },
    { divider: true }, // Separator
    {
      id: 'option2',
      label: 'Option 2',
      onClick: () => {}
    }
  ]}
  isOpen={isOpen}
  onToggle={setIsOpen}
  placement="bottom-start"
  size="md"
  disabled={false}
  closeOnSelect={true}
>
  <button>Trigger</button>
</Dropdown>
```

### DropdownItem

Individual menu item component.

```tsx
<DropdownItem
  label="Edit Item"
  icon={<EditIcon />}
  onClick={() => {}}
  disabled={false}
  danger={false}
/>
```

### DropdownMenu

Standalone menu component for custom implementations.

```tsx
<DropdownMenu
  isOpen={isOpen}
  position={{ top: 100, left: 50 }}
  size="md"
>
  <DropdownItem label="Option 1" onClick={() => {}} />
  <DropdownItem label="Option 2" onClick={() => {}} />
</DropdownMenu>
```

## Props

### DropdownProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Trigger element |
| `items` | `DropdownItemData[]` | `[]` | Menu items |
| `isOpen` | `boolean` | - | Controlled open state |
| `onToggle` | `(isOpen: boolean) => void` | - | Open state change handler |
| `placement` | `DropdownPlacement` | `'bottom-start'` | Menu position |
| `size` | `DropdownSize` | `'md'` | Menu size |
| `disabled` | `boolean` | `false` | Disable the dropdown |
| `closeOnSelect` | `boolean` | `true` | Close menu on item select |

### DropdownItemData

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `id` | `string` | - | Unique identifier |
| `label` | `string` | - | Item text |
| `value` | `string` | - | Item value |
| `icon` | `ReactNode` | - | Item icon |
| `disabled` | `boolean` | `false` | Disable the item |
| `danger` | `boolean` | `false` | Danger styling |
| `divider` | `boolean` | `false` | Render as divider |
| `onClick` | `(event: MouseEvent) => void` | - | Click handler |

## Placement Options

The dropdown supports 12 different placement options:

- `top`, `top-start`, `top-end`
- `bottom`, `bottom-start`, `bottom-end`
- `left`, `left-start`, `left-end`
- `right`, `right-start`, `right-end`

## Size Options

Three size variants are available:

- `sm` - Compact size for tight spaces
- `md` - Default size for most use cases
- `lg` - Large size for better touch targets

## Hooks

### useDropdown

Custom hook for building dropdown functionality:

```tsx
import { useDropdown } from '@asafarim/react-dropdowns';

const {
  isOpen,
  position,
  triggerRef,
  menuRef,
  toggle,
  open,
  close,
  handleItemClick
} = useDropdown({
  placement: 'bottom-start',
  offset: 8,
  closeOnSelect: true
});
```

### useClickOutside

Hook for detecting clicks outside an element:

```tsx
import { useClickOutside } from '@asafarim/react-dropdowns';

useClickOutside({
  ref: elementRef,
  handler: () => setIsOpen(false),
  enabled: isOpen
});
```

### useKeyboardNavigation

Hook for keyboard navigation support:

```tsx
import { useKeyboardNavigation } from '@asafarim/react-dropdowns';

useKeyboardNavigation({
  isOpen,
  menuRef,
  onClose: () => setIsOpen(false),
  onSelect: (index) => selectItem(index)
});
```

## Styling

The components use CSS custom properties (CSS variables) from the ASafariM design token system. Import the CSS file:

```tsx
import '@asafarim/react-dropdowns/dist/dropdown.css';
```

### Custom Styling

You can override the default styles by targeting the CSS classes:

```css
.asm-dropdown-menu {
  /* Custom menu styles */
}

.asm-dropdown-item {
  /* Custom item styles */
}

.asm-dropdown-item--danger {
  /* Custom danger item styles */
}
```

## Accessibility

The dropdown components are built with accessibility in mind:

- **Keyboard Navigation**: Arrow keys, Enter, Escape, Home, End
- **Screen Reader Support**: Proper ARIA attributes and roles
- **Focus Management**: Automatic focus handling and restoration
- **High Contrast**: Support for high contrast mode
- **Reduced Motion**: Respects user's motion preferences

### Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `Space` / `Enter` | Open/close dropdown or select item |
| `Arrow Down` | Navigate to next item or open dropdown |
| `Arrow Up` | Navigate to previous item |
| `Home` | Navigate to first item |
| `End` | Navigate to last item |
| `Escape` | Close dropdown |
| `Tab` | Close dropdown and move to next element |

## Examples

### Basic Menu

```tsx
<Dropdown
  items={[
    { id: 'new', label: 'New', onClick: () => {} },
    { id: 'edit', label: 'Edit', onClick: () => {} },
    { divider: true },
    { id: 'delete', label: 'Delete', danger: true, onClick: () => {} }
  ]}
>
  <button>File</button>
</Dropdown>
```

### User Menu

```tsx
<Dropdown
  items={[
    {
      id: 'profile',
      label: 'Profile',
      icon: <UserIcon />,
      onClick: () => navigate('/profile')
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: <SettingsIcon />,
      onClick: () => navigate('/settings')
    },
    { divider: true },
    {
      id: 'logout',
      label: 'Logout',
      icon: <LogoutIcon />,
      danger: true,
      onClick: handleLogout
    }
  ]}
  placement="bottom-end"
>
  <img src={user.avatar} alt={user.name} />
</Dropdown>
```

### Filter Dropdown

```tsx
const [filter, setFilter] = useState('all');

<Dropdown
  items={[
    {
      id: 'all',
      label: 'All Items',
      icon: filter === 'all' ? <CheckIcon /> : undefined,
      onClick: () => setFilter('all')
    },
    {
      id: 'active',
      label: 'Active Only',
      icon: filter === 'active' ? <CheckIcon /> : undefined,
      onClick: () => setFilter('active')
    },
    {
      id: 'archived',
      label: 'Archived',
      icon: filter === 'archived' ? <CheckIcon /> : undefined,
      onClick: () => setFilter('archived')
    }
  ]}
>
  <button>
    <FilterIcon />
    Filter: {filter}
    <ChevronDownIcon />
  </button>
</Dropdown>
```

## Demo

Run the demo application to see all features in action:

```bash
cd packages/react-dropdowns/demo
npm install
npm start
```

The demo showcases:
- Basic usage examples
- All placement options
- Interactive examples (filters, user selectors)
- Different sizes and states
- Mobile optimizations
- Dark theme support

## Browser Support

- Chrome 88+
- Firefox 78+
- Safari 14+
- Edge 88+

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT © ASafariM

## Button Variants

The dropdown trigger supports multiple button style variants:

- `primary` - Default primary button style
- `secondary` - Secondary button with border
- `success` - Green success button
- `warning` - Orange warning button
- `danger` - Red destructive button
- `info` - Cyan info button
- `ghost` - Transparent ghost button
- `outline` - Outlined button
- `link` - Text link style
- `brand` - Brand-specific color

```tsx
<Dropdown variant="secondary" items={items}>
  <button>Secondary Dropdown</button>
</Dropdown>
```

## Chevron Icon

The dropdown automatically adds a chevron icon to the trigger button. You can disable it with the `showChevron` prop:

```tsx
<Dropdown showChevron={false} items={items}>
  <button>No Chevron</button>
</Dropdown>
```

## Changelog

### 1.1.1

- Added automatic chevron icon to dropdown triggers
- Added `showChevron` prop to control chevron visibility
- Fixed Vite base path configuration for GitHub Pages deployment
- Improved demo app layout with grid-based examples
- Added support for multiple button variants in trigger

### 1.1.0

- Enhanced demo app with variant examples
- Improved styling and layout
- Better mobile responsiveness

### 1.0.0

- Initial release
- Comprehensive dropdown components
- Mobile-first responsive design
- Full accessibility support
- TypeScript support
- ASafariM design token integration
