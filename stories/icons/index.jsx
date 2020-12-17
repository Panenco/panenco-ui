import React from 'react';
import { Icon, Text } from 'components';
import IconDocs from 'components/icon/DOCS.md';
import IconReadme from 'components/icon/README.md';

import { decorator } from '../../utils/decorator';

export default decorator('Icon', IconDocs, IconReadme).add('Icon component', () => (
  <div style={{ display: 'flex', flexWrap: 'wrap' }}>
    {Object.values(Icon.icons).map((el) => (
      <div key={el} style={{ display: 'flex', flexDirection: 'column', margin: '20px 20px 0 0', alignItems: 'center' }}>
        <Icon size={16} icon={el} />
        <Text>{el.id}</Text>
      </div>
    ))}
  </div>
));
