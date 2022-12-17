import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Circle } from '../../components/Circle';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Wonder/Circle',
    component: Circle,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
      backgroundColor: { control: 'color' },
    },
  } as ComponentMeta<typeof Circle>;

const Template: ComponentStory<typeof Circle> = (args) => <Circle {...args} />;

export const WonderColor = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WonderColor.args = {
 backgroundColor:'#FF6549'
};

export const WonderImage = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WonderImage.args = {
 backgroundColor:'#FF6549',
 urlImage:'https://cdn-icons-png.flaticon.com/512/5968/5968267.png',
 altImage:'html'
};
