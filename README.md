# @asafarim/react-dropdowns

**Production-ready dropdown components for React** with full TypeScript support, accessibility, and mobile optimization. Built on ASafariM design tokens.

[Live Demo](https://alisafari-it.github.io/react-dropdowns/) • [GitHub](https://github.com/AliSafari-IT/react-dropdowns) • [npm](https://www.npmjs.com/package/@asafarim/react-dropdowns)

---

## ✨ Features

- **🎯 Comprehensive** — Multiple components for different use cases (simple dropdowns, custom triggers, advanced menus)
- **♿ Fully Accessible** — WCAG 2.1 compliant with keyboard navigation, screen reader support, and ARIA attributes
- **📱 Mobile-First** — Touch-friendly, responsive design with automatic viewport adjustment
- **🎨 Design Token Integration** — Seamless integration with ASafariM design tokens and dark mode support
- **🔧 TypeScript** — Full type safety with IntelliSense and zero runtime overhead
- **⚡ Performant** — Lightweight (~5KB gzipped) with minimal dependencies
- **🎪 Flexible** — 12 placement options, 3 sizes, multiple button variants, and extensive customization

---

## 📦 Installation

```bash
pnpm add @asafarim/react-dropdowns
```

Or with your preferred package manager:

```bash
npm install @asafarim/react-dropdowns
or
yarn add @asafarim/react-dropdowns
```

Then import the styles in your app (in index.tsx or main.tsx):

```tsx
import '@asafarim/react-dropdowns/dist/dropdown.css';
```

---

## 🚀 Quick Start

The simplest way to get started with a basic dropdown menu:

```tsx
import { Dropdown } from '@asafarim/react-dropdowns';
import '@asafarim/react-dropdowns/dist/dropdown.css';

export function App() {
  return (
    <Dropdown
      items={[
        { id: 'edit', label: 'Edit', onClick: () => console.log('Edit') },
        { id: 'delete', label: 'Delete', danger: true, onClick: () => console.log('Delete') }
      ]}
      placement="bottom-start"
    >
      Actions
    </Dropdown>
  );
}
```

That's it! The dropdown handles state, positioning, keyboard navigation, and accessibility automatically.

---

## 📚 Components

### Dropdown (Recommended)

The main component that combines trigger and menu functionality. Use this for most cases.

**Features:**

- Automatic state management
- Built-in click-outside detection
- Keyboard navigation (arrow keys, Enter, Escape)
- Automatic menu positioning
- Optional controlled state

**Basic Usage:**

```tsx
<Dropdown
  items={[
    {
      id: 'edit',
      label: 'Edit',
      icon: <Edit size={16} />,
      onClick: () => handleEdit()
    },
    {
      id: 'delete',
      label: 'Delete',
      icon: <Trash2 size={16} />,
      danger: true,
      onClick: () => handleDelete()
    }
  ]}
  placement="bottom-start"
  size="md"
>
  Actions
</Dropdown>
```

**With Controlled State:**

```tsx
const [isOpen, setIsOpen] = useState(false);

<Dropdown
  items={items}
  isOpen={isOpen}
  onToggle={setIsOpen}
  placement="bottom-start"
>
  Menu
</Dropdown>
```

### DropdownItem

Individual menu item component. Used inside `Dropdown` or `DropdownMenu`.

```tsx
<DropdownItem
  label="Edit"
  icon={<Edit size={16} />}
  onClick={() => handleEdit()}
  disabled={false}
  danger={false}
/>
```

### DropdownMenu

Low-level menu component for advanced custom implementations. Use with `useDropdown` hook for full control.

**When to use:**

- Custom trigger designs (cards, images, etc.)
- Complex menu layouts
- Integration with other positioning libraries

**Example:**

```tsx
import { createPortal } from 'react-dom';
import { DropdownMenu, DropdownItem, useDropdown, useClickOutside } from '@asafarim/react-dropdowns';

function CustomDropdown() {
  const { isOpen, position, toggle, triggerRef, menuRef, close } = useDropdown();
  const containerRef = useRef(null);

  useClickOutside({
    ref: containerRef,
    handler: close,
    enabled: isOpen,
    excludeRefs: [menuRef]
  });

  return (
    <div ref={containerRef}>
      <div ref={triggerRef} onClick={toggle} style={{ cursor: 'pointer' }}>
        Click me
      </div>

      {isOpen && createPortal(
        <DropdownMenu ref={menuRef} isOpen={isOpen} position={position}>
          <DropdownItem label="Option 1" onClick={() => {}} />
          <DropdownItem label="Option 2" onClick={() => {}} />
        </DropdownMenu>,
        document.body
      )}
    </div>
  );
}
```

---

## 🎛️ Props Reference

### Dropdown Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | — | Trigger element content |
| `items` | `DropdownItemData[]` | `[]` | Menu items to display |
| `isOpen` | `boolean` | — | (Optional) Controlled open state |
| `onToggle` | `(isOpen: boolean) => void` | — | (Optional) State change callback |
| `placement` | `DropdownPlacement` | `'bottom-start'` | Menu position relative to trigger |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Menu size |
| `variant` | `ButtonVariant` | `'primary'` | Trigger button style |
| `disabled` | `boolean` | `false` | Disable the dropdown |
| `closeOnSelect` | `boolean` | `true` | Auto-close menu on item click |
| `showChevron` | `boolean` | `true` | Show chevron icon on trigger |
| `className` | `string` | — | Custom CSS class for wrapper |
| `data-testid` | `string` | — | Test ID for testing |

### DropdownItemData Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `id` | `string` | — | Unique identifier |
| `label` | `string` | — | Item display text |
| `icon` | `ReactNode` | — | Icon to display before label |
| `onClick` | `(event: MouseEvent) => void` | — | Click handler |
| `disabled` | `boolean` | `false` | Disable the item |
| `danger` | `boolean` | `false` | Red danger styling |
| `divider` | `boolean` | `false` | Render as visual separator |
| `value` | `string` | — | Optional data value |

### DropdownMenu Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | — | Menu content |
| `isOpen` | `boolean` | — | Show/hide menu |
| `position` | `DropdownPosition` | — | Absolute position (from `useDropdown`) |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Menu size |
| `className` | `string` | — | Custom CSS class |
| `ref` | `RefObject<HTMLDivElement>` | — | Menu element reference |

---

## 🎨 Customization

### Placement Options

Position the menu relative to the trigger:

```
Top:        top | top-start | top-end
Bottom:     bottom | bottom-start | bottom-end
Left:       left | left-start | left-end
Right:      right | right-start | right-end
```

```tsx
<Dropdown items={items} placement="top-end">
  Menu
</Dropdown>
```

### Size Options

```tsx
<Dropdown items={items} size="sm">Compact</Dropdown>
<Dropdown items={items} size="md">Default</Dropdown>
<Dropdown items={items} size="lg">Large</Dropdown>
```

### Button Variants

Style the trigger button:

```tsx
<Dropdown items={items} variant="primary">Primary</Dropdown>
<Dropdown items={items} variant="secondary">Secondary</Dropdown>
<Dropdown items={items} variant="ghost">Ghost</Dropdown>
<Dropdown items={items} variant="outline">Outline</Dropdown>
<Dropdown items={items} variant="danger">Danger</Dropdown>
```

### Custom Styling

Override default styles using CSS classes:

```css
/* Menu container */
.asm-dropdown-menu {
  background: var(--asm-color-surface);
  border: 1px solid var(--asm-color-border);
}

/* Menu item */
.asm-dropdown-item {
  padding: var(--asm-space-3);
}

/* Danger item */
.asm-dropdown-item--danger {
  color: var(--asm-color-danger);
}

/* Disabled item */
.asm-dropdown-item:disabled {
  opacity: 0.5;
}
```

---

## 🪝 Hooks

### useDropdown

Build custom dropdowns with full control over positioning and state.

**Returns:**

```tsx
const {
  isOpen,           // boolean - Menu visibility state
  position,         // DropdownPosition - Calculated position
  triggerRef,       // RefObject - Attach to trigger element
  menuRef,          // RefObject - Attach to menu element
  toggle,           // () => void - Toggle open/closed
  open,             // () => void - Open menu
  close,            // () => void - Close menu
  handleItemClick   // () => void - Handle item selection
} = useDropdown({
  placement: 'bottom-start',
  offset: 8,
  closeOnSelect: true
});
```

**Example:**

```tsx
function CustomDropdown() {
  const { isOpen, position, toggle, triggerRef, menuRef } = useDropdown();

  return (
    <>
      <button ref={triggerRef} onClick={toggle}>
        Open Menu
      </button>
      {isOpen && (
        <DropdownMenu ref={menuRef} isOpen={isOpen} position={position}>
          {/* Menu items */}
        </DropdownMenu>
      )}
    </>
  );
}
```

### useClickOutside

Detect clicks outside an element to close menus.

```tsx
useClickOutside({
  ref: containerRef,           // Element to monitor
  handler: () => setIsOpen(false), // Callback on outside click
  enabled: isOpen,             // Enable/disable detection
  excludeRefs: [menuRef]       // Refs to exclude from detection
});
```

### useKeyboardNavigation

Add keyboard navigation to custom dropdowns.

```tsx
useKeyboardNavigation({
  isOpen,                      // boolean
  menuRef,                     // RefObject to menu
  onClose: () => setIsOpen(false),
  onSelect: (index) => selectItem(index)
});
```

---

## ♿ Accessibility

Built with WCAG 2.1 AA compliance in mind:

- **Keyboard Navigation** — Full support for arrow keys, Enter, Escape, Home, End
- **Screen Readers** — Proper ARIA roles, labels, and live regions
- **Focus Management** — Automatic focus handling and restoration
- **High Contrast** — Works with high contrast mode
- **Reduced Motion** — Respects `prefers-reduced-motion` setting

### Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `Space` / `Enter` | Toggle menu or select item |
| `Arrow Down` | Next item / Open menu |
| `Arrow Up` | Previous item |
| `Home` | First item |
| `End` | Last item |
| `Escape` | Close menu |
| `Tab` | Close menu and move focus |

---

## 💡 Real-World Examples

### File Menu

```tsx
<Dropdown
  items={[
    { id: 'new', label: 'New', icon: <FileText size={16} /> },
    { id: 'open', label: 'Open', icon: <FolderOpen size={16} /> },
    { divider: true },
    { id: 'save', label: 'Save', icon: <Save size={16} /> },
    { id: 'export', label: 'Export', icon: <Download size={16} /> },
    { divider: true },
    { id: 'exit', label: 'Exit', danger: true, icon: <X size={16} /> }
  ]}
  placement="bottom-start"
>
  File
</Dropdown>
```

### User Account Menu

```tsx
const [user, setUser] = useState({ name: 'John Doe', avatar: '...' });

<Dropdown
  items={[
    { id: 'profile', label: 'Profile', icon: <User size={16} /> },
    { id: 'settings', label: 'Settings', icon: <Settings size={16} /> },
    { divider: true },
    { id: 'logout', label: 'Logout', danger: true, icon: <LogOut size={16} /> }
  ]}
  placement="bottom-end"
>
  <img src={user.avatar} alt={user.name} style={{ width: 32, height: 32, borderRadius: '50%' }} />
</Dropdown>
```

### Filter Selector

```tsx
const [filter, setFilter] = useState('all');

<Dropdown
  items={[
    {
      id: 'all',
      label: 'All Items',
      icon: filter === 'all' ? <Check size={16} /> : undefined,
      onClick: () => setFilter('all')
    },
    {
      id: 'active',
      label: 'Active Only',
      icon: filter === 'active' ? <Check size={16} /> : undefined,
      onClick: () => setFilter('active')
    },
    {
      id: 'archived',
      label: 'Archived',
      icon: filter === 'archived' ? <Check size={16} /> : undefined,
      onClick: () => setFilter('archived')
    }
  ]}
  placement="bottom-start"
>
  <Filter size={16} />
  {filter}
</Dropdown>
```

### Context Menu (Advanced)

See the demo app for a complete example using `useDropdown` with custom card trigger styling.

---

## 🧪 Testing

All components are fully testable with standard React testing libraries:

```tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

test('opens dropdown on click', async () => {
  render(
    <Dropdown items={[{ id: 'test', label: 'Test', onClick: jest.fn() }]}>
      Trigger
    </Dropdown>
  );

  const trigger = screen.getByText('Trigger');
  await userEvent.click(trigger);

  expect(screen.getByText('Test')).toBeInTheDocument();
});
```

---

## 🌐 Browser Support

| Browser | Version |
|---------|---------|
| Chrome | 88+ |
| Firefox | 78+ |
| Safari | 14+ |
| Edge | 88+ |

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit changes: `git commit -m 'Add your feature'`
4. Push to branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📄 License

MIT © ASafariM

---

## 🔗 Resources

- [Live Demo](https://alisafari-it.github.io/react-dropdowns/)
- [GitHub Repository](https://github.com/AliSafari-IT/react-dropdowns)
- [npm Package](https://www.npmjs.com/package/@asafarim/react-dropdowns)
- [ASafariM Design Tokens](https://github.com/AliSafari-IT/design-tokens)

---

## 📋 Changelog

### 1.8.0

- Added an advanced `useDropdown` demo section with custom trigger, portal rendering, and click-outside handling
- Documented low-level hook usage with full examples and testing guidance
- Rewrote README for clearer onboarding (installation, components, customization)
- Improved demo styles and behavior (auto-close on outside click, refined trigger states)

### 1.1.1

- Added automatic chevron icon to dropdown triggers
- Added `showChevron` prop to control chevron visibility
- Fixed Vite base path configuration for GitHub Pages deployment
- Improved demo app layout with grid-based examples
- Added support for multiple button variants in trigger
- Added advanced custom dropdown example with `useDropdown` hook

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
