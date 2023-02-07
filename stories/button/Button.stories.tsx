import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { colors } from 'styles';
import { Button } from 'components/button';

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Button',
  },
  argTypes: {
    color: {
      control: {
        type: 'color',
      },
    },
    children: {
      control: {
        type: 'text',
      },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

const TemplateVariants: ComponentStory<typeof Button> = (args) => (
  <div
    style={{
      display: 'flex',
      gap: '1rem',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Button variant='text' {...args} />
    <Button variant='contained' {...args} />
    <Button variant='outlined' {...args} />
  </div>
);

export const Default = Template.bind({});

export const Text = Template.bind({});
Text.args = {
  children: 'Text',
  variant: 'text',
};

export const Outlined = Template.bind({});
Outlined.args = {
  children: 'Outlined',
  variant: 'outlined',
};

export const Contained = Template.bind({});
Contained.args = {
  children: 'Contained',
  variant: 'contained',
};

export const Disabled = TemplateVariants.bind({});
Disabled.args = {
  children: 'Disabled',
  disabled: true,
};
Disabled.argTypes = {
  variant: {
    control: {
      disable: true,
    },
  },
};

export const Loading = TemplateVariants.bind({});
Loading.args = {
  children: 'Loading',
  isLoading: true,
};
Loading.argTypes = {
  variant: {
    control: {
      disable: true,
    },
  },
};

export const Icon = TemplateVariants.bind({});
Icon.args = {
  children: undefined,
  icon: 'eye',
};
Icon.argTypes = {
  children: {
    control: {
      disable: true,
    },
  },
  variant: {
    control: {
      disable: true,
    },
  },
};

export const IconLeft = TemplateVariants.bind({});
IconLeft.args = {
  children: 'Icon Left',
  iconLeft: 'eye',
};
IconLeft.argTypes = {
  variant: {
    control: {
      disable: true,
    },
  },
};

export const IconRight = TemplateVariants.bind({});
IconRight.args = {
  children: 'Icon Right',
  iconRight: 'eye',
};
IconRight.argTypes = {
  variant: {
    control: {
      disable: true,
    },
  },
};

export const Color = TemplateVariants.bind({});
Color.args = {
  children: 'Color',
  color: '#3e5e89',
};
Color.argTypes = {
  variant: {
    control: {
      disable: true,
    },
  },
};

export const Component = TemplateVariants.bind({});
Component.args = {
  children: 'Component',
  component: 'a',
  href: 'https://google.com',
};
Component.argTypes = {
  variant: {
    control: {
      disable: true,
    },
  },
};
