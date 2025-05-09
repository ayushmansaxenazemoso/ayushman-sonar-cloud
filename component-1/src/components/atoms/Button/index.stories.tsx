
// js

// import Button  from '../components/atoms/Button/button'

// export default {
//   title: "components/atoms/Button",
//   component: Button,
//   argTypes: {
//     onClick: { action: 'clicked' },
//   },
// }

// const template = (args) => <Button {...args} />;
// // export const red = () => (
// //   <Button text="Press me" />
// // )

// export const small=template.bind({})
// small.args={
//     text:'Click me',
//     size:"small",

// }

// export const medium=template.bind({})
// medium.args={
//     text:'Click me',
//     size:"medium"

// }

// export const large=template.bind({})
// large.args={
//     text:'Click me',
//     size:"large"

// }



// typescript
import { Meta, StoryObj } from '@storybook/react';
import Button from './index';

const meta: Meta<typeof Button> = {
  title: 'components/atoms/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const login: Story = {
  args: {
    text: 'Click me',
    size: 'small',
  },
};

export const back: Story = {
  args: {
    text: 'Back',
    size: 'small',
    color:'black'
  },
};


