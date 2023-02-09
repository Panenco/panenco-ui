import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DayPicker } from 'components/form/day-picker';
import { icons } from 'components';

export default {
  title: 'Components/Form/DayPicker (deprecated)',
  component: DayPicker,
  args: {
    title: 'title',
    subTitle: 'Subtitle',
    placeholder: 'Placeholder',
  },
  argTypes: {
    defaultDay: { control: 'date' },
    iconAfter: {
      control: 'select',
      options: Object.keys(icons.sm),
    },
    inputMask: {
      control: 'text',
    },
    value: {
      control: 'date',
    },
  },
  decorators: [(Story) => <div style={{ minHeight: '500px' }}>{Story()}</div>],
} as ComponentMeta<typeof DayPicker>;

const Template: ComponentStory<typeof DayPicker> = (args) => <DayPicker {...args} />;

export const Default = Template.bind({});

export const Position = Template.bind({});
Position.args = {
  position: 'bottom-end',
};

export const Format = Template.bind({});
Format.args = {
  format: 'dd/MM/yyyy',
};

export const TimePicker = Template.bind({});
TimePicker.args = {
  isTimePicker: true,
};

export const Mobile = Template.bind({});
Mobile.args = {
  isMobile: true,
};

export const Error = Template.bind({});
Error.args = {
  error: 'Error message',
};

export const SaveLabel = Template.bind({});
SaveLabel.args = {
  saveLabel: 'Save label',
  isTimePicker: true,
};

export const DefaultDay = Template.bind({});
DefaultDay.args = {
  defaultDay: new Date(),
};

export const IconAfter = Template.bind({});
IconAfter.args = {
  iconAfter: 'eye',
};

export const TimeTitle = Template.bind({});
TimeTitle.args = {
  timeTitle: 'Time title',
  isTimePicker: true,
};

export const Direction = Template.bind({});
Direction.args = {
  dir: 'rtl',
};

export const TimeInputErrorText = Template.bind({});
TimeInputErrorText.args = {
  timeInputErrorText: 'Time input error text',
  isTimePicker: true,
};

export const ManualInput = Template.bind({});
ManualInput.args = {
  manualInput: true,
};

export const InputMask = Template.bind({});
InputMask.args = {
  manualInput: true,
  inputMask: [/[0-1]/, /[0-9]/, '|', /[0-3]/, /[0-9]/, '|', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/],
};

export const DisabledDates = Template.bind({});
DisabledDates.args = {
  dayPickerProps: {
    disabled: [{ before: new Date() }, { after: new Date() }],
  },
};

export const Disabled = Template.bind({});
Disabled.args = {
  dateInputProps: {
    disabled: true,
  },
};
