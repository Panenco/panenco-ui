import { Icon } from 'components';
import * as React from 'react';

const Spinner = React.forwardRef<any, any>(() => {
  return <Icon icon={Icon.icons.loader} className="spinner" />;
});

export default Spinner;
