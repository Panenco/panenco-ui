import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { colors } from 'styles';
import { ButtonIcon } from 'components/button-icon';
import { icons } from 'components';

export default {
  title: 'Example/ButtonIcon',
  component: ButtonIcon,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
    component: {
      control: {
        type: 'select',
        options: ['button', 'a'],
      },
    },
    icon: {
      control: {
        type: 'select',
        options: Object.keys(icons.sm),
      },
    },
  },
} as ComponentMeta<typeof ButtonIcon>;

const Template: ComponentStory<typeof ButtonIcon> = (args) => <ButtonIcon {...args} />;

export const Default = Template.bind({});

export const WithText = Template.bind({});
WithText.args = {
  children: 'With text',
};

export const IconLeft = Template.bind({});
IconLeft.args = {
  children: 'Icon left',
  iconLeft: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled',
  disabled: true,
};

export const CustomColor = Template.bind({});
CustomColor.args = {
  children: 'Custom color',
  color: colors.primary700,
};

export const CustomSize = Template.bind({});
CustomSize.args = {
  children: 'Custom size',
  size: 40,
};

export const CustomComponent = Template.bind({});
CustomComponent.args = {
  children: 'Custom component',
  component: 'a',
  href: 'https://www.google.com',
};
