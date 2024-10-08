import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button } from '@/components/ui/button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    children: 'Button',
    variant: 'default',
  },
};
export const Destructive: Story = {
  args: {
    children: 'Destructive',
    variant: 'destructive',
  },
};
export const Ghost: Story = {
  args: {
    children: 'Ghost',
    variant: 'ghost',
  },
};


