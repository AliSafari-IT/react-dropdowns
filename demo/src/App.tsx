import { useState } from 'react';
import {
  ChevronDown,
  User,
  Edit,
  Trash2,
  Filter,
  MoreHorizontal,
  Check,
  X,
  Download,
  Share,
  Copy,
  Archive,
  Star,
  Heart,
  Bookmark,
  Copy as CopyIcon,
  Check as CheckIcon
} from 'lucide-react';
import { Dropdown } from '@asafarim/react-dropdowns';
import { ThemeToggle } from '@asafarim/react-themes';
import { PackageLinks } from '@asafarim/shared';

function App() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [selectedUser, setSelectedUser] = useState('John Doe');
  const [showModal, setShowModal] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const installCommands = [
    'npm install @asafarim/react-dropdowns',
    'yarn add @asafarim/react-dropdowns',
    'pnpm add @asafarim/react-dropdowns'
  ];

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="demo-container">
      {/* Theme Toggle */}
      <nav className="demo-theme-toggle">
        <ThemeToggle size="sm" variant='outline' />
      </nav>

      {/* Header */}
      <header className="demo-header">
        <h1 className="demo-title">React Dropdowns</h1>
        <p className="demo-subtitle">
          Comprehensive, accessible, and mobile-first dropdown components for React
        </p>
      </header>
      <div style={{ marginTop: "3rem" }}>
        <PackageLinks
          packageName="@asafarim/react-dropdowns"
          githubPath="https://github.com/AliSafari-IT/react-dropdowns"
          demoPath="https://alisafari-it.github.io/react-dropdowns/"
        />
      </div>

      {/* Get Started CTA */}
      <div className="demo-cta-section">
        <div className="demo-cta-content">
          <h2 className="demo-cta-title">🚀 Get Started in Seconds</h2>
          <p className="demo-cta-description">
            Install the package and start building beautiful dropdowns with our comprehensive guide
          </p>
          <button 
            className="demo-cta-button"
            onClick={() => setShowModal(true)}
          >
            <Download className="demo-cta-icon" />
            Installation & Quick Start
            <ChevronDown className="demo-cta-chevron" />
          </button>
        </div>
      </div>

      {/* Installation & Quick Start Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowModal(false)}>
              <X size={24} />
            </button>

            <div className="modal-header">
              <h2 className="modal-title">Get Started</h2>
              <p className="modal-subtitle">Installation & Quick Start Guide</p>
            </div>

            <div className="modal-body">
              {/* Installation Section */}
              <div className="modal-section">
                <h3 className="modal-section-title">📦 Installation</h3>
                <p className="modal-section-description">
                  Choose your preferred package manager to install the library.
                </p>
                <div className="install-commands">
                  {installCommands.map((cmd, idx) => (
                    <div key={idx} className="install-command">
                      <code className="command-text">{cmd}</code>
                      <button
                        className="copy-button"
                        onClick={() => handleCopy(cmd, idx)}
                        title="Copy to clipboard"
                      >
                        {copiedIndex === idx ? (
                          <>
                            <CheckIcon size={16} />
                            <span>Copied!</span>
                          </>
                        ) : (
                          <>
                            <CopyIcon size={16} />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Start Section */}
              <div className="modal-section">
                <h3 className="modal-section-title">⚡ Quick Start Examples</h3>
                <p className="modal-section-description">
                  Real-world examples showing different use cases and features.
                </p>
                
                {/* Example 1: Basic Actions Menu */}
                <div style={{ marginBottom: 'var(--asm-space-6)' }}>
                  <h4 style={{ fontSize: 'var(--asm-font-size-sm)', fontWeight: 'var(--asm-font-weight-600)', marginBottom: 'var(--asm-space-2)', color: 'var(--asm-color-text)' }}>
                    1. Basic Actions Menu
                  </h4>
                  <div className="quick-start-code">
                    <pre><code>{`import { Dropdown } from '@asafarim/react-dropdowns';
import { Edit, Trash2 } from 'lucide-react';

<Dropdown
  items={[
    {
      id: 'edit',
      label: 'Edit',
      icon: <Edit />,
      onClick: () => alert('Edit clicked')
    },
    {
      id: 'delete',
      label: 'Delete',
      icon: <Trash2 />,
      danger: true,
      onClick: () => alert('Delete clicked')
    }
  ]}
  placement="bottom-start"
>
  Actions
</Dropdown>`}</code></pre>
                  </div>
                  <div style={{ marginTop: 'var(--asm-space-3)', padding: 'var(--asm-space-3)', background: 'var(--asm-color-surface-muted)', borderRadius: 'var(--asm-radius-md)', border: '1px solid var(--asm-color-border)' }}>
                    <p style={{ fontSize: 'var(--asm-font-size-xs)', color: 'var(--asm-color-text-muted)', margin: '0 0 var(--asm-space-2) 0' }}>Live Preview:</p>
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
                      Actions
                    </Dropdown>
                  </div>
                </div>

                {/* Example 2: User Selector with State */}
                <div style={{ marginBottom: 'var(--asm-space-6)' }}>
                  <h4 style={{ fontSize: 'var(--asm-font-size-sm)', fontWeight: 'var(--asm-font-weight-600)', marginBottom: 'var(--asm-space-2)', color: 'var(--asm-color-text)' }}>
                    2. Stateful User Selector
                  </h4>
                  <div className="quick-start-code">
                    <pre><code>{`const [selectedUser, setSelectedUser] = useState('John Doe');

<Dropdown
  items={[
    { id: 'john', label: 'John Doe', onClick: () => setSelectedUser('John Doe') },
    { id: 'jane', label: 'Jane Smith', onClick: () => setSelectedUser('Jane Smith') },
    { id: 'bob', label: 'Bob Johnson', onClick: () => setSelectedUser('Bob Johnson') }
  ]}
  variant="outline"
  showChevron={false}
>
  <User size={16} />
  {selectedUser}
  <ChevronDown size={16} />
</Dropdown>`}</code></pre>
                  </div>
                  <div style={{ marginTop: 'var(--asm-space-3)', padding: 'var(--asm-space-3)', background: 'var(--asm-color-surface-muted)', borderRadius: 'var(--asm-radius-md)', border: '1px solid var(--asm-color-border)' }}>
                    <p style={{ fontSize: 'var(--asm-font-size-xs)', color: 'var(--asm-color-text-muted)', margin: '0 0 var(--asm-space-2) 0' }}>Live Preview:</p>
                    <Dropdown
                      items={[
                        { id: 'john', label: 'John Doe', onClick: () => setSelectedUser('John Doe') },
                        { id: 'jane', label: 'Jane Smith', onClick: () => setSelectedUser('Jane Smith') },
                        { id: 'bob', label: 'Bob Johnson', onClick: () => setSelectedUser('Bob Johnson') }
                      ]}
                      variant="outline"
                      showChevron={false}
                    >
                      <User size={16} />
                      {selectedUser}
                      <ChevronDown size={16} />
                    </Dropdown>
                  </div>
                </div>

                {/* Example 3: Context Menu */}
                <div>
                  <h4 style={{ fontSize: 'var(--asm-font-size-sm)', fontWeight: 'var(--asm-font-weight-600)', marginBottom: 'var(--asm-space-2)', color: 'var(--asm-color-text)' }}>
                    3. Context Menu with Variants
                  </h4>
                  <div className="quick-start-code">
                    <pre><code>{`<Dropdown
  items={[
    { id: 'share', label: 'Share', icon: <Share /> },
    { id: 'copy', label: 'Copy Link', icon: <Copy /> },
    { type: 'divider' },
    { id: 'archive', label: 'Archive', icon: <Archive /> }
  ]}
  variant="ghost"
  size="sm"
>
  <MoreHorizontal size={20} />
</Dropdown>`}</code></pre>
                  </div>
                  <div style={{ marginTop: 'var(--asm-space-3)', padding: 'var(--asm-space-3)', background: 'var(--asm-color-surface-muted)', borderRadius: 'var(--asm-radius-md)', border: '1px solid var(--asm-color-border)' }}>
                    <p style={{ fontSize: 'var(--asm-font-size-xs)', color: 'var(--asm-color-text-muted)', margin: '0 0 var(--asm-space-2) 0' }}>Live Preview:</p>
                    <Dropdown
                      items={[
                        { id: 'share', label: 'Share', icon: <Share className="demo-icon" /> },
                        { id: 'copy', label: 'Copy Link', icon: <Copy className="demo-icon" /> },
                        { divider: true, label: 'Divider' },
                        { id: 'archive', label: 'Archive', icon: <Archive className="demo-icon" /> }
                      ]}
                      variant="ghost"
                      size="sm"
                    >
                      <MoreHorizontal size={20} />
                    </Dropdown>
                  </div>
                </div>
              </div>

              {/* Features Section */}
              <div className="modal-section">
                <h3 className="modal-section-title">✨ Key Features</h3>
                <div className="features-grid">
                  <div className="feature-item">
                    <span className="feature-icon">🎯</span>
                    <span className="feature-text">Comprehensive</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">♿</span>
                    <span className="feature-text">Accessible</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">📱</span>
                    <span className="feature-text">Mobile-First</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">🎨</span>
                    <span className="feature-text">Themeable</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">🔧</span>
                    <span className="feature-text">TypeScript</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">⚡</span>
                    <span className="feature-text">Performant</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button className="modal-button-secondary" onClick={() => setShowModal(false)}>
                Close
              </button>
              <button className="modal-button-primary" onClick={() => setShowModal(false)}>
                Explore Demo
              </button>
            </div>
          </div>
        </div>
      )}

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
                showChevron={true}
              >
                Actions
              </Dropdown>
            </div>
          </div>

          <div className="demo-card">
            <h3 className="demo-card-title">Variant Dropdowns</h3>
            <p className="demo-card-description">
              Dropdown with secondary button styling.
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
                showChevron={true}
                variant='secondary'
              >
                More Actions
              </Dropdown>
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
                showChevron={true}
                variant='ghost'
              >
                More Actions
              </Dropdown>
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
                showChevron={true}
                variant='link'
              >
                More Actions
              </Dropdown>
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
                showChevron={true}
                variant='danger'
              >
                More Actions
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
                showChevron={false}
              >
                <MoreHorizontal className="demo-icon" />
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
                  { id: '1', label: 'Option 1', onClick: () => { } },
                  { id: '2', label: 'Option 2', onClick: () => { } },
                  { id: '3', label: 'Option 3', onClick: () => { } }
                ]}
                placement="top"
                showChevron={true}
              >
                Top
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
                  { id: '1', label: 'Option 1', onClick: () => { } },
                  { id: '2', label: 'Option 2', onClick: () => { } },
                  { id: '3', label: 'Option 3', onClick: () => { } }
                ]}
                placement="left"
                showChevron={true}
              >
                Left
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
                  { id: '1', label: 'Option 1', onClick: () => { } },
                  { id: '2', label: 'Option 2', onClick: () => { } },
                  { id: '3', label: 'Option 3', onClick: () => { } }
                ]}
                placement="right"
                showChevron={true}
              >
                Right
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
                showChevron={true}
              >
                <Filter className="demo-icon" />
                {selectedFilter}
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
                showChevron={true}
              >
                <User className="demo-icon" />
                {selectedUser}
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
                showChevron={false}
              >
                More Actions
                <MoreHorizontal className="demo-icon" />
              </Dropdown>
            </div>
          </div>
        </div>
      </section>

      {/* Button Variants */}
      <section className="demo-section">
        <h2 className="demo-section-title">Button Variants</h2>
        <p className="demo-section-description">
          Dropdown triggers with different button style variants using ASafariM design tokens.
        </p>

        <div className="demo-grid">
          <div className="demo-card">
            <h3 className="demo-card-title">Primary Variant</h3>
            <p className="demo-card-description">
              Default primary button style.
            </p>
            <div className="demo-example">
              <Dropdown
                items={[
                  { id: '1', label: 'Option 1', onClick: () => { } },
                  { id: '2', label: 'Option 2', onClick: () => { } }
                ]}
                variant="primary"
                placement="bottom-start"
              >
                Primary
              </Dropdown>
            </div>
          </div>

          <div className="demo-card">
            <h3 className="demo-card-title">Secondary Variant</h3>
            <p className="demo-card-description">
              Secondary button style with border.
            </p>
            <div className="demo-example">
              <Dropdown
                items={[
                  { id: '1', label: 'Option 1', onClick: () => { } },
                  { id: '2', label: 'Option 2', onClick: () => { } }
                ]}
                variant="secondary"
                placement="bottom-start"
              >
                Secondary
              </Dropdown>
            </div>
          </div>

          <div className="demo-card">
            <h3 className="demo-card-title">Success Variant</h3>
            <p className="demo-card-description">
              Green success button style.
            </p>
            <div className="demo-example">
              <Dropdown
                items={[
                  { id: '1', label: 'Option 1', onClick: () => { } },
                  { id: '2', label: 'Option 2', onClick: () => { } }
                ]}
                variant="success"
                placement="bottom-start"
              >
                Success
              </Dropdown>
            </div>
          </div>

          <div className="demo-card">
            <h3 className="demo-card-title">Warning Variant</h3>
            <p className="demo-card-description">
              Orange warning button style.
            </p>
            <div className="demo-example">
              <Dropdown
                items={[
                  { id: '1', label: 'Option 1', onClick: () => { } },
                  { id: '2', label: 'Option 2', onClick: () => { } }
                ]}
                variant="warning"
                placement="bottom-start"
              >
                Warning
              </Dropdown>
            </div>
          </div>

          <div className="demo-card">
            <h3 className="demo-card-title">Danger Variant</h3>
            <p className="demo-card-description">
              Red danger/destructive button style.
            </p>
            <div className="demo-example">
              <Dropdown
                items={[
                  { id: '1', label: 'Option 1', onClick: () => { } },
                  { id: '2', label: 'Option 2', onClick: () => { } }
                ]}
                variant="danger"
                placement="bottom-start"
              >
                Danger
              </Dropdown>
            </div>
          </div>

          <div className="demo-card">
            <h3 className="demo-card-title">Info Variant</h3>
            <p className="demo-card-description">
              Cyan info button style.
            </p>
            <div className="demo-example">
              <Dropdown
                items={[
                  { id: '1', label: 'Option 1', onClick: () => { } },
                  { id: '2', label: 'Option 2', onClick: () => { } }
                ]}
                variant="info"
                placement="bottom-start"
              >
                Info
              </Dropdown>
            </div>
          </div>

          <div className="demo-card">
            <h3 className="demo-card-title">Ghost Variant</h3>
            <p className="demo-card-description">
              Transparent ghost button style.
            </p>
            <div className="demo-example">
              <Dropdown
                items={[
                  { id: '1', label: 'Option 1', onClick: () => { } },
                  { id: '2', label: 'Option 2', onClick: () => { } }
                ]}
                variant="ghost"
                placement="bottom-start"
              >
                Ghost
              </Dropdown>
            </div>
          </div>

          <div className="demo-card">
            <h3 className="demo-card-title">Outline Variant</h3>
            <p className="demo-card-description">
              Outlined button style.
            </p>
            <div className="demo-example">
              <Dropdown
                items={[
                  { id: '1', label: 'Option 1', onClick: () => { } },
                  { id: '2', label: 'Option 2', onClick: () => { } }
                ]}
                variant="outline"
                placement="bottom-start"
              >
                Outline
              </Dropdown>
            </div>
          </div>

          <div className="demo-card">
            <h3 className="demo-card-title">Link Variant</h3>
            <p className="demo-card-description">
              Text link button style.
            </p>
            <div className="demo-example">
              <Dropdown
                items={[
                  { id: '1', label: 'Option 1', onClick: () => { } },
                  { id: '2', label: 'Option 2', onClick: () => { } }
                ]}
                variant="link"
                placement="bottom-start"
              >
                Link Style
              </Dropdown>
            </div>
          </div>

          <div className="demo-card">
            <h3 className="demo-card-title">Brand Variant</h3>
            <p className="demo-card-description">
              Brand-specific button style.
            </p>
            <div className="demo-example">
              <Dropdown
                items={[
                  { id: '1', label: 'Option 1', onClick: () => { } },
                  { id: '2', label: 'Option 2', onClick: () => { } }
                ]}
                variant="brand"
                placement="bottom-start"
              >
                Brand
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
                  { id: '1', label: 'Small Option 1', onClick: () => { } },
                  { id: '2', label: 'Small Option 2', onClick: () => { } }
                ]}
                size="sm"
                placement="bottom-start"
                showChevron={false}
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
                  { id: '1', label: 'Large Option 1', onClick: () => { } },
                  { id: '2', label: 'Large Option 2', onClick: () => { } }
                ]}
                size="lg"
                placement="bottom-start"
                showChevron={false}
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
                  { id: '1', label: 'Option 1', onClick: () => { } },
                  { id: '2', label: 'Option 2', onClick: () => { } }
                ]}
                disabled={true}
                placement="bottom-start"
                showChevron={false}
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

      {/* Use Cases */}
      <section className="demo-section">
        <h2 className="demo-section-title">Real-World Use Cases</h2>
        <p className="demo-section-description">
          Practical examples of how to implement dropdowns in common application scenarios.
        </p>

        <div className="demo-grid">
          <div className="demo-card">
            <h3 className="demo-card-title">Navigation Menu</h3>
            <p className="demo-card-description">
              Main navigation with category selection.
            </p>
            <div className="demo-example">
              <Dropdown
                items={[
                  { id: 'home', label: 'Home', onClick: () => alert('Navigate to Home') },
                  { id: 'about', label: 'About', onClick: () => alert('Navigate to About') },
                  { id: 'services', label: 'Services', onClick: () => alert('Navigate to Services') },
                  {
                    divider: true,
                    label: 'Divider'
                  },
                  { id: 'contact', label: 'Contact', onClick: () => alert('Navigate to Contact') }
                ]}
                placement="bottom-start"
                variant="outline"
              >
                Menu
              </Dropdown>
            </div>
          </div>

          <div className="demo-card">
            <h3 className="demo-card-title">Bulk Actions</h3>
            <p className="demo-card-description">
              Actions for selected items in a list.
            </p>
            <div className="demo-example">
              <Dropdown
                items={[
                  { id: 'archive', label: 'Archive', icon: <Archive className="demo-icon" />, onClick: () => alert('Archived') },
                  { id: 'delete', label: 'Delete', icon: <Trash2 className="demo-icon" />, danger: true, onClick: () => alert('Deleted') },
                  { divider: true , label: 'Divider' },
                  { id: 'export', label: 'Export', icon: <Download className="demo-icon" />, onClick: () => alert('Exported') }
                ]}
                placement="bottom-start"
                variant="secondary"
              >
                Actions
              </Dropdown>
            </div>
          </div>

          <div className="demo-card">
            <h3 className="demo-card-title">Sort & Filter</h3>
            <p className="demo-card-description">
              Sorting options for data tables.
            </p>
            <div className="demo-example">
              <Dropdown
                items={[
                  { id: 'newest', label: 'Newest First', onClick: () => alert('Sorted by newest') },
                  { id: 'oldest', label: 'Oldest First', onClick: () => alert('Sorted by oldest') },
                  { divider: true, label: 'Divider' },
                  { id: 'name-asc', label: 'Name (A-Z)', onClick: () => alert('Sorted by name') },
                  { id: 'name-desc', label: 'Name (Z-A)', onClick: () => alert('Sorted by name desc') }
                ]}
                placement="bottom-start"
              >
                Sort By
              </Dropdown>
            </div>
          </div>

          <div className="demo-card">
            <h3 className="demo-card-title">Theme Switcher</h3>
            <p className="demo-card-description">
              Select application theme or language.
            </p>
            <div className="demo-example">
              <Dropdown
                items={[
                  { id: 'light', label: 'Light Theme', onClick: () => alert('Light theme selected') },
                  { id: 'dark', label: 'Dark Theme', onClick: () => alert('Dark theme selected') },
                  { id: 'auto', label: 'Auto (System)', onClick: () => alert('Auto theme selected') }
                ]}
                placement="bottom-start"
                variant="ghost"
              >
                Theme
              </Dropdown>
            </div>
          </div>

          <div className="demo-card">
            <h3 className="demo-card-title">Notification Settings</h3>
            <p className="demo-card-description">
              Configure notification preferences.
            </p>
            <div className="demo-example">
              <Dropdown
                items={[
                  { id: 'all', label: 'All Notifications', onClick: () => alert('All enabled') },
                  { id: 'important', label: 'Important Only', onClick: () => alert('Important only') },
                  { id: 'none', label: 'Mute All', onClick: () => alert('Muted') }
                ]}
                placement="bottom-start"
                variant="outline"
              >
                Notifications
              </Dropdown>
            </div>
          </div>

          <div className="demo-card">
            <h3 className="demo-card-title">Export Format</h3>
            <p className="demo-card-description">
              Choose export file format.
            </p>
            <div className="demo-example">
              <Dropdown
                items={[
                  { id: 'pdf', label: 'PDF', onClick: () => alert('Exporting as PDF') },
                  { id: 'csv', label: 'CSV', onClick: () => alert('Exporting as CSV') },
                  { id: 'xlsx', label: 'Excel', onClick: () => alert('Exporting as Excel') },
                  { id: 'json', label: 'JSON', onClick: () => alert('Exporting as JSON') }
                ]}
                placement="bottom-start"
                variant="success"
              >
                Export
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
