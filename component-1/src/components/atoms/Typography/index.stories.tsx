import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Typography from './index';

const meta: Meta<typeof Typography> = {
  title: 'components/atoms/Typography',
  component: Typography,
};

export default meta;

type Story = StoryObj<typeof Typography>;

export const HeadingSmall: Story = {
  args: {
    heading: 'Small Title',
    size: 'small',
  },
};

export const BodyMedium: Story = {
  args: {
    heading: 'Default Body Text',
    size: 'medium',
  },
};

export const HeadingLarge: Story = {
  args: {
    heading: 'Large Heading',
    size: 'large',
  },
};

export const CustomText: Story = {
  args: {
    heading: 'This is some custom text',
  },
};