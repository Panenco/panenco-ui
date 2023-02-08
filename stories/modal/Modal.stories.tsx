import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Modal } from 'components/modal';
import { Button } from 'components/button';
import docs from './readme.md';

export default {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    docs: {
      description: {
        component: docs,
      },
    },
  },
  subcomponents: {
    'Modal.Title': Modal.Title,
    'Modal.Header': Modal.Header,
    'Modal.Body': Modal.Body,
    'Modal.Footer': Modal.Footer,
  },
  argTypes: {
    children: {
      control: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => {
  const [modalOpen, setModalOpen] = React.useState(false);

  const handleModalHide = () => {
    setModalOpen(false);
  };
  const handleModalShow = () => {
    setModalOpen(true);
  };
  return (
    <>
      <div>
        <Button variant='contained' onClick={handleModalShow}>
          Open modal
        </Button>
      </div>
      <Modal aria-labelledby='exampleModal' {...args} show={modalOpen} onHide={handleModalHide}>
        <Modal.Header>
          <Modal.Title id='exampleModal'>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere quasi praesentium sed dolorem, voluptas
          maiores sapiente reiciendis tempora repudiandae error! Adipisci voluptates debitis reiciendis rem officia
          eaque, commodi nesciunt, quos sequi, eius quibusdam magnam. Omnis quod quia nulla! Fuga, quibusdam. Cumque
          dicta numquam cupiditate dolore repellendus expedita est, voluptatum aspernatur dignissimos hic et ratione,
          facilis quam aliquam, ullam eum error soluta deserunt pariatur mollitia alias sed repellat. Dolor laborum
          omnis cupiditate deserunt ratione inventore porro, sapiente magnam eum molestias quaerat molestiae incidunt
          culpa adipisci ducimus. Odit cum doloremque accusamus nemo animi asperiores quisquam molestiae. Aperiam sint
          nostrum vitae doloribus perferendis!
        </Modal.Body>
        <Modal.Footer>Modal footer</Modal.Footer>
      </Modal>
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

export const ScrollPaper = Template.bind({});
ScrollPaper.args = {
  scroll: 'paper',
};
