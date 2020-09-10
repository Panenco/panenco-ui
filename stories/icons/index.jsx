import React from 'react';
import { Icon } from 'components';
import IconDocs from 'components/icon/DOCS.md';
import IconReadme from 'components/icon/README.md';

import { decorator } from '../../utils/decorator';

export default decorator('Icon', IconDocs, IconReadme).add('Icon component', () => (
  <div style={{ display: 'flex', flexWrap: 'wrap' }}>
    {Object.values(Icon.icons).map((el) => (
      <Icon icon={el} key={el} style={{ marginRight: '10px' }} />
    ))}
  </div>
));
