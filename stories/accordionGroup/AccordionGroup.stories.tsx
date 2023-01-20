import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Accordion, AccordionGroup } from 'components/accordion';
import docs from './readme.md';

export default {
  title: 'Example/AccordionGroup',
  component: AccordionGroup,

  parameters: {
    docs: {
      description: {
        component: docs,
      },
    },
    controls: {
      disable: true,
    },
  },
} as ComponentMeta<typeof AccordionGroup>;

const Template: ComponentStory<typeof AccordionGroup> = (args) => (
  <AccordionGroup {...args}>
    <Accordion iconLeft variant='text' title='Accordion Title 1'>
      Accordion Content 1
    </Accordion>
    <Accordion iconLeft variant='text' title='Accordion Title 2'>
      Accordion Content 2
    </Accordion>
    <Accordion iconLeft variant='text' title='Accordion Title 3'>
      Accordion Content 3
    </Accordion>
  </AccordionGroup>
);

export const Default = Template.bind({});
