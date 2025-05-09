// interface LoginFormProps {
//   email: string;
//   password: string;
//   onEmailChange: (e: any) => void;
//   onPasswordChange: (e: any) => void;
//   onSubmit: (e: React.FormEvent) => void;
//   onClear: () => void;
// }


import { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { action } from '@storybook/addon-actions'; 

import LoginForm from  './index';

const googleLogo = require('../../../assets/google.png');


const meta: Meta<typeof LoginForm> = {
  title: 'components/organism/Login',
  component: LoginForm,
};

export default meta;

type Story = StoryObj<typeof LoginForm>;

export const login: Story = {
  args: {
    
  email: "abc@gmail.com",
  password: "abc@123",
  onEmailChange: (e: any) => console.log(e.target.value),
  onPasswordChange: (e: any) => console.log(e.target.value),
  onSubmit: (e: any) => console.log(e.target.value),
  onClear: () => console.log(''),
        
      },
  };
