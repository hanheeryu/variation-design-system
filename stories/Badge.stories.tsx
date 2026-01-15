import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '@/components/Badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'success', 'warning', 'error', 'info'],
      description: 'Visual style variant',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Badge size',
    },
    shape: {
      control: 'select',
      options: ['rounded', 'pill', 'square'],
      description: 'Badge shape',
    },
    dot: {
      control: 'boolean',
      description: 'Show dot indicator',
    },
    pulse: {
      control: 'boolean',
      description: 'Enable pulse animation',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default
export const Default: Story = {
  args: {
    children: 'Badge',
  },
};

// Variants
export const Variants: Story = {
  render: () => (
    <div className="flex gap-2">
      <Badge variant="default">Default</Badge>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="error">Error</Badge>
      <Badge variant="info">Info</Badge>
    </div>
  ),
};

// Sizes
export const Sizes: Story = {
  render: () => (
    <div className="flex gap-2 items-center">
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </div>
  ),
};

// Shapes
export const Shapes: Story = {
  render: () => (
    <div className="flex gap-2">
      <Badge shape="rounded">Rounded</Badge>
      <Badge shape="pill">Pill</Badge>
      <Badge shape="square">Square</Badge>
    </div>
  ),
};

// With dot
export const WithDot: Story = {
  render: () => (
    <div className="flex gap-2">
      <Badge variant="success" dot>
        Active
      </Badge>
      <Badge variant="warning" dot>
        Pending
      </Badge>
      <Badge variant="error" dot>
        Offline
      </Badge>
    </div>
  ),
};

// Pulse animation
export const WithPulse: Story = {
  args: {
    children: 'New',
    variant: 'error',
    pulse: true,
  },
};

// Status badges
export const StatusBadges: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        <Badge variant="success" dot shape="pill">
          Online
        </Badge>
        <Badge variant="warning" dot shape="pill">
          Away
        </Badge>
        <Badge variant="error" dot shape="pill">
          Offline
        </Badge>
      </div>
      <div className="flex gap-2">
        <Badge variant="primary" shape="pill">
          New
        </Badge>
        <Badge variant="info" shape="pill">
          Featured
        </Badge>
        <Badge variant="default" shape="pill">
          Draft
        </Badge>
      </div>
    </div>
  ),
};
