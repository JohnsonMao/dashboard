import type { Meta, StoryObj } from '@storybook/react';

import Axis from './Axis';

const meta = {
  title: 'Axis',
  component: Axis,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  decorators: [
    (Story, props) => (
      <svg width={props.args.rangeEnd - props.args.rangeStart + 16}>
        <Story {...props} />
      </svg>
    ),
  ],
} satisfies Meta<typeof Axis>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    domainStart: 0,
    domainEnd: 100,
    rangeStart: 5,
    rangeEnd: 295,
  },
};
