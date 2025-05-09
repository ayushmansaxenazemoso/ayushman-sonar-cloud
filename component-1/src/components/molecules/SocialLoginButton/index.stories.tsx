
import { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { action } from '@storybook/addon-actions'; 

import SocialLogin from  './index';

const googleLogo =  require('../../../assets/google.png')


const meta: Meta<typeof SocialLogin> = {
  title: 'components/molecules/SocialLogin',
  component: SocialLogin,
};

export default meta;

type Story = StoryObj<typeof SocialLogin>;

export const login: Story = {
  args: {
    
   logo:googleLogo,
   alt:"google image"
        
      },
  };
