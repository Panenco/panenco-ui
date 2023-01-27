import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Paper } from 'components/paper';

export default {
  title: 'Example/Paper (deprecated)',
  component: Paper,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
} as ComponentMeta<typeof Paper>;

const Template: ComponentStory<typeof Paper> = (args) => <Paper {...args} />;

export const Default = Template.bind({});
