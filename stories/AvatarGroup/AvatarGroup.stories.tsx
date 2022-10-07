import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AvatarGroup } from 'components';
import docs from './readme.md';

const avatars = [
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJmD-ID1Gcf4RD0YWdMtgcjjpMqS89ldAE6w&usqp=CAU',
    alt: 'alt',
  },
  {
    children: 'PU',
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJmD-ID1Gcf4RD0YWdMtgcjjpMqS89ldAE6w&usqp=CAU',
    alt: 'alt',
    size: 45,
  },
  {
    children: 'PU',
  },
  {
    children: 'P',
  },
];

export default {
  title: 'Example/AvatarGroup',
  component: AvatarGroup,
  parameters: {
    docs: {
      description: {
        component: docs,
      },
    },
  },
} as ComponentMeta<typeof AvatarGroup>;

const Template: ComponentStory<typeof AvatarGroup> = (args) => <AvatarGroup {...args} />;

export const Group = Template.bind({});

Group.args = {
  avatars,
  avatarProps: { size: 60 },
  max: 3,
};
