import React from 'react';
import { Icon, Text } from 'components';
import IconDocs from 'components/icon/DOCS.md';
import IconReadme from 'components/icon/README.md';

import { decorator } from '../../utils/decorator';

export default decorator('Icon', IconDocs, IconReadme).add('Icon component', () => (
  <div style={{ display: 'flex', flexWrap: 'wrap' }}>
    <div style={{ margin: '0 0 20px 0' }}>
      {Object.keys(Icon.icons.sm).map((el) => (
        <div
          key={el}
          style={{ display: 'flex', flexDirection: 'column', margin: '20px 20px 0 0', alignItems: 'center' }}
        >
          <Icon size='sm' icon={el} />
          <Text>{el}</Text>
        </div>
      ))}
    </div>
    <div style={{ margin: '0 0 20px 0' }}>
      {Object.keys(Icon.icons.md).map((el) => (
        <div
          key={el}
          style={{ display: 'flex', flexDirection: 'column', margin: '20px 20px 0 0', alignItems: 'center' }}
        >
          <Icon size='md' icon={el} />
          <Text>{el}</Text>
        </div>
      ))}
    </div>
    <div style={{ margin: '0 0 20px 0' }}>
      {Object.keys(Icon.icons.lg).map((el) => (
        <div
          key={el}
          style={{ display: 'flex', flexDirection: 'column', margin: '20px 20px 0 0', alignItems: 'center' }}
        >
          <Icon size='lg' icon={el} />
          <Text>{el}</Text>
        </div>
      ))}
    </div>
  </div>
));
