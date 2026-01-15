import type { Meta, StoryObj } from '@storybook/react';
import { Alert, AlertTitle, AlertDescription } from '@/components/Alert';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error'],
      description: 'Visual style variant',
    },
    dismissible: {
      control: 'boolean',
      description: 'Show dismiss button',
    },
    icon: {
      control: 'boolean',
      description: 'Show icon',
    },
    animation: {
      control: 'select',
      options: ['fade-in', 'slide-down', 'none'],
      description: 'Entry animation',
    },
    onDismiss: { action: 'dismissed' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default
export const Default: Story = {
  args: {
    children: 'This is an informational alert message.',
  },
};

// Variants
export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-96">
      <Alert variant="info">
        <AlertDescription>
          This is an informational message to help you.
        </AlertDescription>
      </Alert>
      <Alert variant="success">
        <AlertDescription>
          Your changes have been saved successfully.
        </AlertDescription>
      </Alert>
      <Alert variant="warning">
        <AlertDescription>
          Please review your input before continuing.
        </AlertDescription>
      </Alert>
      <Alert variant="error">
        <AlertDescription>
          Something went wrong. Please try again.
        </AlertDescription>
      </Alert>
    </div>
  ),
};

// With title
export const WithTitle: Story = {
  render: () => (
    <Alert variant="success" className="w-96">
      <AlertTitle>Payment Successful</AlertTitle>
      <AlertDescription>
        Your payment of $99.00 has been processed. Check your email for the
        receipt.
      </AlertDescription>
    </Alert>
  ),
};

// Dismissible
export const Dismissible: Story = {
  args: {
    dismissible: true,
    variant: 'info',
    children: (
      <>
        <AlertTitle>Update Available</AlertTitle>
        <AlertDescription>
          A new version is available. Click here to update.
        </AlertDescription>
      </>
    ),
  },
};

// Without icon
export const WithoutIcon: Story = {
  args: {
    icon: false,
    children: 'This alert has no icon.',
  },
};

// Animation variations
export const Animations: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-96">
      <Alert animation="fade-in">
        <AlertDescription>Fade in animation</AlertDescription>
      </Alert>
      <Alert animation="slide-down">
        <AlertDescription>Slide down animation</AlertDescription>
      </Alert>
      <Alert animation="none">
        <AlertDescription>No animation</AlertDescription>
      </Alert>
    </div>
  ),
};

// All variants with titles
export const AllVariantsWithTitles: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-96">
      <Alert variant="info" dismissible>
        <AlertTitle>Information</AlertTitle>
        <AlertDescription>
          This is an informational message with additional context.
        </AlertDescription>
      </Alert>
      <Alert variant="success" dismissible>
        <AlertTitle>Success</AlertTitle>
        <AlertDescription>
          Your action was completed successfully.
        </AlertDescription>
      </Alert>
      <Alert variant="warning" dismissible>
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription>
          Please proceed with caution.
        </AlertDescription>
      </Alert>
      <Alert variant="error" dismissible>
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          An error occurred. Please try again.
        </AlertDescription>
      </Alert>
    </div>
  ),
};
