import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Accordion as PUIAccordion, AccordionGroup as PUIAccordionGroup } from 'components/accordion';

export default {
  title: 'Example/Accordion',
  component: PUIAccordion,
  args: {
    title: 'Accordion Title',
    iconLeft: true,
    iconRight: true,
    variant: 'outlined',
    shouldRotateIcon: true,
  },
  argTypes: {
    title: { control: 'text' },
    iconLeft: { control: 'boolean' },
    iconRight: { control: 'boolean' },
    variant: { control: 'radio' },
    shouldRotateIcon: { control: 'boolean' },
  },
} as ComponentMeta<typeof PUIAccordion>;

export const Accordion: ComponentStory<typeof PUIAccordion> = (args) => (
  <PUIAccordion {...args}>
    We will verify your application and get back to you if we have any questions. The verification process can take a
    couple of months. We will verify your application and get back to you if we have any questions. The verification
    process can take a couple of months.
  </PUIAccordion>
);

export const AccordionGroup: ComponentStory<typeof PUIAccordion> = (args) => (
  <PUIAccordionGroup>
    <PUIAccordion {...args}>
      We will verify your application and get back to you if we have any questions. The verification process can take a
      couple of months. We will verify your application and get back to you if we have any questions. The verification
      process can take a couple of months.
    </PUIAccordion>
    <PUIAccordion {...args}>
      We will verify your application and get back to you if we have any questions. The verification process can take a
      couple of months. We will verify your application and get back to you if we have any questions. The verification
      process can take a couple of months.
    </PUIAccordion>
    <PUIAccordion {...args}>
      We will verify your application and get back to you if we have any questions. The verification process can take a
      couple of months. We will verify your application and get back to you if we have any questions. The verification
      process can take a couple of months.
    </PUIAccordion>
  </PUIAccordionGroup>
);

AccordionGroup.parameters = {
  controls: { disable: true },
};
