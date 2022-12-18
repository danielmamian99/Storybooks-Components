import { ComponentStory, ComponentMeta } from '@storybook/react';

import { WonderButton } from '../../components/WonderButton';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Wonder/Button',
  component: WonderButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof WonderButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof WonderButton> = (args) => <WonderButton {...args} />;

export const Wonder = Template.bind({});
Wonder.args = {
  neon: true,
  size: 'large',
  label: 'Wonder Text',
  backgroundColor: '#FF805A'
};

export const Image = Template.bind({});
Image.args = {
  neon: false,
  size: 'large',
  label: 'Wonder Text',
  backgroundColor: '#FF805A',
  urlImage: 'https://cdn-icons-png.flaticon.com/512/5968/5968267.png',
  altImage: 'html',
  imageSize:'small'
};
