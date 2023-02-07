import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Avatar } from 'components/avatar';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  args: {
    children: 'JD',
  },
  argTypes: {
    className: { control: 'text' },
    size: { control: 'number' },
    src: { control: 'text' },
    imgProps: {
      control: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});

export const WithImage = Template.bind({});
WithImage.args = {
  src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJmD-ID1Gcf4RD0YWdMtgcjjpMqS89ldAE6w&usqp=CAU',
  imgProps: {
    alt: 'John Doe',
  },
};

export const WithText = Template.bind({});

export const CustomSize = Template.bind({});
CustomSize.args = {
  size: 64,
};
