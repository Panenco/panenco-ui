import React from 'react';
import { Icon, Text, icons } from 'components';
import { ComponentMeta } from '@storybook/react';
import docs from './readme.md';

export default {
  title: 'Example/Icons',
  component: Icon,
  parameters: {
    docs: {
      description: {
        component: docs,
      },
    },
  },
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Icon>;

export const Icons = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <div style={{ margin: '0 0 20px 0' }}>
        {Object.keys(icons.sm).map((el) => (
          <div
            key={el}
            style={{ display: 'flex', flexDirection: 'column', margin: '32px 20px 0 0', alignItems: 'center' }}
          >
            <Icon size='sm' icon={el as any} />
            <Text>{el}</Text>
          </div>
        ))}
      </div>
      <div style={{ margin: '0 0 20px 0' }}>
        {Object.keys(icons.md).map((el) => (
          <div
            key={el}
            style={{ display: 'flex', flexDirection: 'column', margin: '24px 20px 0 0', alignItems: 'center' }}
          >
            <Icon size='md' icon={el as any} />
            <Text>{el}</Text>
          </div>
        ))}
      </div>
      <div style={{ margin: '0 0 20px 0' }}>
        {Object.keys(icons.lg).map((el) => (
          <div
            key={el}
            style={{ display: 'flex', flexDirection: 'column', margin: '20px 20px 0 0', alignItems: 'center' }}
          >
            <Icon size='lg' icon={el as any} />
            <Text>{el}</Text>
          </div>
        ))}
      </div>
    </div>
  );
};
