import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Avatar } from 'components/avatar';
import docs from './readme.md';

export default {
  title: 'Example/Avatar',
  component: Avatar,
  parameters: {
    docs: {
      description: {
        component: docs,
      },
    },
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const NoLinkToImage = Template.bind({});

NoLinkToImage.args = {
  children: 'PU',
};

export const WithLink = Template.bind({});

WithLink.args = {
  src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJmD-ID1Gcf4RD0YWdMtgcjjpMqS89ldAE6w&usqp=CAU',
  alt: 'PU',
};
