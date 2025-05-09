
import { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { action } from '@storybook/addon-actions'; 

import Input from  './index';

const meta: Meta<typeof Input> = {
  title: 'components/atoms/Input',
  component: Input,
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Entry: Story = {
  args: {
    type: 'text',
    placeholder: 'Enter your password',
    value: 'abc', 
    onChange: (e:any) => {
      action('changed')(e.target.value);  
    },
  },
};