
import { Meta, StoryObj } from '@storybook/react';
import ImageIcon from  './index';
const googleImg= require('../../../assets/google.png')

const meta: Meta<typeof ImageIcon> = {
  title: 'components/atoms/ImageIcon',
  component: ImageIcon,

};

export default meta;

type Story = StoryObj<typeof ImageIcon>;

export const Img: Story = {
    args: {
      src: googleImg,  
      alt: 'Google icon',
    },
  };
