import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Popup } from 'components/popup';
import { Button } from 'components/button';
import docs from './readme.md';

export default {
  title: 'Example/Popup',
  component: Popup,
  parameters: {
    docs: {
      description: {
        component: docs,
      },
    },
  },
  subcomponents: {
    'Popup.Title': Popup.Title,
    'Popup.Header': Popup.Header,
    'Popup.Body': Popup.Body,
    'Popup.Footer': Popup.Footer,
  },
  argTypes: {
    children: {
      control: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Popup>;

const Template: ComponentStory<typeof Popup> = (args) => {
  const [popupOpen, setPopupOpen] = React.useState(false);

  const handlePopupHide = () => {
    setPopupOpen(false);
  };
  const handlePopupShow = () => {
    setPopupOpen(true);
  };
  return (
    <>
      <div>
        <Button variant='contained' onClick={handlePopupShow}>
          Open popup
        </Button>
      </div>
      <Popup aria-labelledby='examplePopup' {...args} show={popupOpen} onHide={handlePopupHide}>
        <Popup.Header>
          <Popup.Title id='examplePopup'>Popup title</Popup.Title>
        </Popup.Header>
        <Popup.Body>Popup body</Popup.Body>
        <Popup.Footer>Popup footer</Popup.Footer>
      </Popup>
    </>
  );
};

export const Default = Template.bind({});

export const Small = Template.bind({});
Small.args = {
  size: 'sm',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'md',
};

export const Large = Template.bind({});
Large.args = {
  size: 'lg',
};
