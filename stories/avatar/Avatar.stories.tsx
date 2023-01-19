import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Avatar as PUIAvatar } from 'components/avatar';

export default {
  title: 'Example/Avatar',
  component: PUIAvatar,

  args: {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJmD-ID1Gcf4RD0YWdMtgcjjpMqS89ldAE6w&usqp=CAU',
    imgProps: {
      alt: 'John Doe',
    },
    children: 'JD',
    size: 54,
  },
} as ComponentMeta<typeof PUIAvatar>;

export const Avatar: ComponentStory<typeof PUIAvatar> = (args) => <PUIAvatar {...args} />;
