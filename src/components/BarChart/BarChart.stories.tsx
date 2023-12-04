import type { Meta, StoryObj } from '@storybook/react';

import BarChart from './BarChart';

const meta = {
  title: 'Chart/BarChart',
  component: BarChart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof BarChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {},
};
