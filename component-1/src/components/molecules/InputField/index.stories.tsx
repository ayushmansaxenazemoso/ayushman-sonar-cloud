
import { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { action } from '@storybook/addon-actions'; 

import InputField from  './index';

const meta: Meta<typeof InputField> = {
  title: 'components/molecules/InputField',
  component: InputField,
};

export default meta;

type Story = StoryObj<typeof InputField>;

export const email: Story = {
  args: {
    
    label:"Email",
    placeholder:"Enter your email",
    value:"abc",
    onChange: (e:any) => {
        console.log(e.target.value);
        
      },
  }
}


  export const fullName: Story = {
    args: {
      
      label:"Full Name",
      placeholder:"Enter your full name",
      value:"Full Name",
      onChange: (e:any) => {
          console.log(e.target.value);
          
        },
    }
  };

