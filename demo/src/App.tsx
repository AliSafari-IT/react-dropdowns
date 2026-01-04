import React, { useState } from 'react';
import { 
  ChevronDown, 
  Settings, 
  User, 
  LogOut, 
  Edit, 
  Trash2, 
  Plus, 
  Filter, 
  MoreHorizontal,
  Sun,
  Moon,
  Check,
  X,
  Download,
  Share,
  Copy,
  Archive,
  Star,
  Heart,
  Bookmark
} from 'lucide-react';
import { Dropdown } from '@asafarim/react-dropdowns';
import { ThemeToggle } from '@asafarim/react-themes';

function App() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [selectedUser, setSelectedUser] = useState('John Doe');

  return (
    <div className="demo-container">
      {/* Theme Toggle */}
      <div className="demo-theme-toggle">
        <ThemeToggle size="sm" />
      </div>

      {/* Header */}
      <header className="demo-header">
        <h1 className="demo-title">React Dropdowns</h1>
        <p className="demo-subtitle">
          Comprehensive, accessible, and mobile-first dropdown components for React
        </p>
      </header>

      {/* Basic Usage */}
      <section className="demo-section">
        <h2 className="demo-section-title">Basic Usage</h2>
        <p className="demo-section-description">
          Simple dropdown menus with various trigger styles and placements.
        </p>
        
        <div className="demo-grid">
          <div className="demo-card">
            <h3 className="demo-card-title">Default Dropdown</h3>
            <p className="demo-card-description">
              Basic dropdown with primary button trigger.
            </p>
            <div className="demo-example">
              <Dropdown
                items={[
                  {
                    id: 'edit',
                    label: 'Edit',
                    icon: <Edit className="demo-icon" />,
                    onClick: () => alert('Edit clicked')
                  },
                  {
                    id: 'delete',
                    label: 'Delete',
                    icon: <Trash2 className="demo-icon" />,
                    danger: true,
                    onClick: () => alert('Delete clicked')
                  }
                ]}
                placement="bottom-start"
              >
                <button className="demo-button">
                  Actions
                  <ChevronDown className="demo-icon" />
                </button>
              </Dropdown>
            </div>
          </div>

          <div className="demo-card">
            <h3 className="demo-card-title">Secondary Style</h3>
            <p className="demo-card-description">
              Dropdown with secondary button styling.
            </p>
            <div className="demo-example">
              <Dropdown
                items={[
                  {
                    id: 'profile',
                    label: 'Profile',
                    icon: <User className="demo-icon" />,
                    onClick: () => alert('Profile clicked')
                  },
                  {
                    id: 'settings',
                    label: 'Settings',
                    icon: <Settings className="demo-icon" />,
                    onClick: () => alert('Settings clicked')
                  },
                  { divider: true, label: 'Divider' },
                  {
                    id: 'logout',
                    label: 'Logout',
                    icon: <LogOut className="demo-icon" />,
                    danger: true,
                    onClick: () => alert('Logout clicked')
                  }
                ]}
                placement="bottom-end"
              >
                <button className="demo-button demo-button--secondary">
                  Menu
                  <ChevronDown className="demo-icon" />
                </button>
              </Dropdown>
            </div>
          </div>

          <div className="demo-card">
            <h3 className="demo-card-title">Icon Only</h3>
            <p className="demo-card-description">
              Minimal dropdown with icon-only trigger.
            </p>
            <div className="demo-example">
              <Dropdown
                items={[
                  {
                    id: 'copy',
                    label: 'Copy',
                    icon: <Copy className="demo-icon" />,
                    onClick: () => alert('Copy clicked')
                  },
                  {
                    id: 'download',
                    label: 'Download',
                    icon: <Download className="demo-icon" />,
                    onClick: () => alert('Download clicked')
                  },
                  {
                    id: 'share',
                    label: 'Share',
                    icon: <Share className="demo-icon" />,
                    onClick: () => alert('Share clicked')
                  }
                ]}
                placement="bottom"
              >
                <button className="demo-button demo-button--ghost">
                  <MoreHorizontal className="demo-icon" />
                </button>
              </Dropdown>
            </div>
          </div>
        </div>
      </section>

      {/* Placements */}
      <section className="demo-section">
        <h2 className="demo-section-title">Placement Options</h2>
        <p className="demo-section-description">
          Dropdowns can be positioned in various directions relative to the trigger.
        </p>
        
        <div className="demo-grid">
          <div className="demo-card">
            <h3 className="demo-card-title">Top Placement</h3>
            <p className="demo-card-description">
              Dropdown opens above the trigger.
            </p>
            <div className="demo-example">
              <Dropdown
                items={[
                  { id: '1', label: 'Option 1', onClick: () => {} },
                  { id: '2', label: 'Option 2', onClick: () => {} },
                  { id: '3', label: 'Option 3', onClick: () => {} }
                ]}
                placement="top"
              >
                <button className="demo-button">
                  Top
                  <ChevronDown className="demo-icon" />
                </button>
              </Dropdown>
            </div>
          </div>

          <div className="demo-card">
            <h3 className="demo-card-title">Left Placement</h3>
            <p className="demo-card-description">
              Dropdown opens to the left of the trigger.
            </p>
            <div className="demo-example">
              <Dropdown
                items={[
                  { id: '1', label: 'Option 1', onClick: () => {} },
                  { id: '2', label: 'Option 2', onClick: () => {} },
                  { id: '3', label: 'Option 3', onClick: () => {} }
                ]}
                placement="left"
              >
                <button className="demo-button">
                  Left
                  <ChevronDown className="demo-icon" />
                </button>
              </Dropdown>
            </div>
          </div>

          <div className="demo-card">
            <h3 className="demo-card-title">Right Placement</h3>
            <p className="demo-card-description">
              Dropdown opens to the right of the trigger.
            </p>
            <div className="demo-example">
              <Dropdown
                items={[
                  { id: '1', label: 'Option 1', onClick: () => {} },
                  { id: '2', label: 'Option 2', onClick: () => {} },
                  { id: '3', label: 'Option 3', onClick: () => {} }
                ]}
                placement="right"
              >
                <button className="demo-button">
                  Right
                  <ChevronDown className="demo-icon" />
                </button>
              </Dropdown>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Examples */}
      <section className="demo-section">
        <h2 className="demo-section-title">Interactive Examples</h2>
        <p className="demo-section-description">
          Real-world examples showing how dropdowns can be used in applications.
        </p>
        
        <div className="demo-grid">
          <div className="demo-card">
            <h3 className="demo-card-title">Filter Dropdown</h3>
            <p className="demo-card-description">
              Select from predefined filter options.
            </p>
            <div className="demo-example">
              <Dropdown
                items={[
                  {
                    id: 'all',
                    label: 'All Items',
                    icon: selectedFilter === 'All' ? <Check className="demo-icon" /> : undefined,
                    onClick: () => setSelectedFilter('All')
                  },
                  {
                    id: 'active',
                    label: 'Active Only',
                    icon: selectedFilter === 'Active' ? <Check className="demo-icon" /> : undefined,
                    onClick: () => setSelectedFilter('Active')
                  },
                  {
                    id: 'archived',
                    label: 'Archived',
                    icon: selectedFilter === 'Archived' ? <Check className="demo-icon" /> : undefined,
                    onClick: () => setSelectedFilter('Archived')
                  }
                ]}
                placement="bottom-start"
              >
                <button className="demo-button demo-button--secondary">
                  <Filter className="demo-icon" />
                  {selectedFilter}
                  <ChevronDown className="demo-icon" />
                </button>
              </Dropdown>
              <p style={{ marginTop: '1rem', fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
                Selected: {selectedFilter}
              </p>
            </div>
          </div>

          <div className="demo-card">
            <h3 className="demo-card-title">User Selector</h3>
            <p className="demo-card-description">
              Choose from a list of users with avatars.
            </p>
            <div className="demo-example">
              <Dropdown
                items={[
                  {
                    id: 'john',
                    label: 'John Doe',
                    icon: selectedUser === 'John Doe' ? <Check className="demo-icon" /> : <User className="demo-icon" />,
                    onClick: () => setSelectedUser('John Doe')
                  },
                  {
                    id: 'jane',
                    label: 'Jane Smith',
                    icon: selectedUser === 'Jane Smith' ? <Check className="demo-icon" /> : <User className="demo-icon" />,
                    onClick: () => setSelectedUser('Jane Smith')
                  },
                  {
                    id: 'bob',
                    label: 'Bob Johnson',
                    icon: selectedUser === 'Bob Johnson' ? <Check className="demo-icon" /> : <User className="demo-icon" />,
                    onClick: () => setSelectedUser('Bob Johnson')
                  }
                ]}
                placement="bottom-start"
              >
                <button className="demo-button demo-button--secondary">
                  <User className="demo-icon" />
                  {selectedUser}
                  <ChevronDown className="demo-icon" />
                </button>
              </Dropdown>
              <p style={{ marginTop: '1rem', fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
                Assigned to: {selectedUser}
              </p>
            </div>
          </div>

          <div className="demo-card">
            <h3 className="demo-card-title">Context Menu</h3>
            <p className="demo-card-description">
              Rich context menu with multiple actions and states.
            </p>
            <div className="demo-example">
              <Dropdown
                items={[
                  {
                    id: 'favorite',
                    label: 'Add to Favorites',
                    icon: <Star className="demo-icon" />,
                    onClick: () => alert('Added to favorites')
                  },
                  {
                    id: 'bookmark',
                    label: 'Bookmark',
                    icon: <Bookmark className="demo-icon" />,
                    onClick: () => alert('Bookmarked')
                  },
                  {
                    id: 'like',
                    label: 'Like',
                    icon: <Heart className="demo-icon" />,
                    onClick: () => alert('Liked')
                  },
                  { divider: true, label: 'Divider' },
                  {
                    id: 'archive',
                    label: 'Archive',
                    icon: <Archive className="demo-icon" />,
                    onClick: () => alert('Archived')
                  },
                  {
                    id: 'remove',
                    label: 'Remove',
                    icon: <X className="demo-icon" />,
                    danger: true,
                    onClick: () => alert('Removed')
                  }
                ]}
                placement="bottom-end"
              >
                <button className="demo-button">
                  More Actions
                  <MoreHorizontal className="demo-icon" />
                </button>
              </Dropdown>
            </div>
          </div>
        </div>
      </section>

      {/* Sizes and States */}
      <section className="demo-section">
        <h2 className="demo-section-title">Sizes and States</h2>
        <p className="demo-section-description">
          Different sizes and states for various use cases.
        </p>
        
        <div className="demo-grid">
          <div className="demo-card">
            <h3 className="demo-card-title">Small Size</h3>
            <p className="demo-card-description">
              Compact dropdown for tight spaces.
            </p>
            <div className="demo-example">
              <Dropdown
                items={[
                  { id: '1', label: 'Small Option 1', onClick: () => {} },
                  { id: '2', label: 'Small Option 2', onClick: () => {} }
                ]}
                size="sm"
                placement="bottom-start"
              >
                <button className="demo-button" style={{ fontSize: '0.75rem', padding: '0.375rem 0.75rem' }}>
                  Small
                  <ChevronDown className="demo-icon" style={{ width: '12px', height: '12px' }} />
                </button>
              </Dropdown>
            </div>
          </div>

          <div className="demo-card">
            <h3 className="demo-card-title">Large Size</h3>
            <p className="demo-card-description">
              Spacious dropdown for better touch targets.
            </p>
            <div className="demo-example">
              <Dropdown
                items={[
                  { id: '1', label: 'Large Option 1', onClick: () => {} },
                  { id: '2', label: 'Large Option 2', onClick: () => {} }
                ]}
                size="lg"
                placement="bottom-start"
              >
                <button className="demo-button" style={{ fontSize: '1rem', padding: '0.75rem 1.5rem' }}>
                  Large
                  <ChevronDown className="demo-icon" style={{ width: '20px', height: '20px' }} />
                </button>
              </Dropdown>
            </div>
          </div>

          <div className="demo-card">
            <h3 className="demo-card-title">Disabled State</h3>
            <p className="demo-card-description">
              Dropdown in disabled state.
            </p>
            <div className="demo-example">
              <Dropdown
                items={[
                  { id: '1', label: 'Option 1', onClick: () => {} },
                  { id: '2', label: 'Option 2', onClick: () => {} }
                ]}
                disabled={true}
                placement="bottom-start"
              >
                <button className="demo-button" disabled style={{ opacity: 0.6, cursor: 'not-allowed' }}>
                  Disabled
                  <ChevronDown className="demo-icon" />
                </button>
              </Dropdown>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Considerations */}
      <section className="demo-section">
        <h2 className="demo-section-title">Mobile Optimizations</h2>
        <p className="demo-section-description">
          The dropdown components are optimized for mobile devices with larger touch targets and responsive behavior.
        </p>
        
        <div className="demo-card">
          <h3 className="demo-card-title">Mobile-Friendly Features</h3>
          <ul style={{ color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
            <li>Larger touch targets on mobile devices (44px minimum)</li>
            <li>Responsive menu sizing based on viewport</li>
            <li>Touch-friendly spacing and padding</li>
            <li>Automatic positioning to stay within viewport</li>
            <li>Support for touch gestures and keyboard navigation</li>
            <li>Optimized animations for better performance</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default App;
