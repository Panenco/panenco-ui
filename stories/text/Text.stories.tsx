import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { colors, sizes, weights } from 'styles';
import { Text } from 'components/text';
import docs from './readme.md';

export default {
  title: 'Example/Text',
  component: Text,
  parameters: {
    docs: {
      description: {
        component: docs,
      },
    },
  },
  args: {
    children: 'Text',
  },
  argTypes: {
    color: { control: 'color' },
    component: {
      control: {
        type: 'select',
        options: ['p', 'span', 'div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: Object.keys(sizes),
      },
    },
    weight: {
      control: {
        type: 'select',
        options: Object.keys(weights),
      },
    },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Default = Template.bind({});

export const Color = Template.bind({});

Color.args = {
  color: colors.primary700,
};

export const Size = Template.bind({});

Size.args = {
  size: 'xl',
};

export const CustomSize = Template.bind({});

CustomSize.args = {
  size: { textSize: '40px', lineHeight: '40px' },
};

CustomSize.argTypes = {
  size: {
    control: {
      type: 'object',
    },
  },
};

export const Weight = Template.bind({});
Weight.args = {
  weight: 'bold',
};

export const CustomWeight = Template.bind({});
CustomWeight.args = {
  weight: 100,
};
CustomWeight.argTypes = {
  weight: {
    control: {
      type: 'number',
    },
  },
};
