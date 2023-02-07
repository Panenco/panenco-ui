import React, { useState } from 'react';
import { Icon, Text, icons, TextInput } from 'components';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import docs from './readme.md';

export default {
  title: 'Components/Icons',
  component: Icon,
  parameters: {
    docs: {
      description: {
        component: docs,
      },
    },
  },
  argTypes: {
    height: { control: 'number' },
    strokeWidth: { control: 'number' },
    width: { control: 'number' },
  },
  args: {
    icon: 'eye',
    strokeWidth: 1.33,
    size: 'md',
  },
} as ComponentMeta<typeof Icon>;

export const IconDemo: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const IconsList = () => {
  const [searchText, setSearchText] = useState('');

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = target;
    setSearchText(value);
  };
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'column' }}>
      <div style={{ width: '300px', marginBottom: '10px' }}>
        <TextInput onChange={handleChange} placeholder='Search icons' iconBefore='search' />
      </div>

      <div style={{ margin: '0 0 20px 0', marginRight: '20px' }}>
        <Text size='l'>Icons sm</Text>
        <div style={{ display: 'flex', width: '100%', flexWrap: 'wrap' }}>
          {Object.keys(icons.sm)
            .filter((icon) => icon.includes(searchText))
            .map((el) => (
              <div
                key={el}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  margin: '32px 0 0 0',
                  alignItems: 'center',
                  gap: '5px',
                  width: '150px',
                }}
              >
                <Icon size='sm' icon={el as any} />
                <Text color='grey'>{el}</Text>
              </div>
            ))}
        </div>
      </div>
      <div style={{ margin: '0 0 20px 0', marginRight: '20px' }}>
        <Text size='l'>Icons md</Text>
        <div style={{ display: 'flex', width: '100%', flexWrap: 'wrap' }}>
          {Object.keys(icons.md)
            .filter((icon) => icon.includes(searchText))
            .map((el) => (
              <div
                key={el}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  margin: '32px 0 0 0',
                  alignItems: 'center',
                  gap: '5px',
                  width: '150px',
                }}
              >
                <Icon size='md' icon={el as any} />
                <Text color='grey'>{el}</Text>
              </div>
            ))}
        </div>
      </div>
      <div style={{ margin: '0 0 20px 0', marginRight: '20px' }}>
        <Text size='l'>Icons lg</Text>
        <div style={{ display: 'flex', width: '100%', flexWrap: 'wrap' }}>
          {Object.keys(icons.lg)
            .filter((icon) => icon.includes(searchText))
            .map((el) => (
              <div
                key={el}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  margin: '32px 0 0 0',
                  alignItems: 'center',
                  gap: '5px',
                  width: '150px',
                }}
              >
                <Icon size='lg' icon={el as any} />
                <Text color='grey'>{el}</Text>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

IconsList.parameters = {
  controls: { disable: true },
};
