
import { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { action } from '@storybook/addon-actions'; 

import PairTypography from  './index';

const meta: Meta<typeof PairTypography> = {
  title: 'components/atoms/PairTypography',
  component: PairTypography,
};

export default meta;

type Story = StoryObj<typeof PairTypography>;

export const para: Story = {
  args: {
    
    heading:"Para ",
    subtext:"paragaph",
    size:"small"
  },
};

export const columnHeading: Story = {
  args: {
    
    heading:"Column Heading",
    subtext:"Column details",
    size:"medium"
  },
};

export const heading: Story = {
  args: {
    
    heading:"Title",
    subtext:"Subtext",
    size:"large"
  },
};