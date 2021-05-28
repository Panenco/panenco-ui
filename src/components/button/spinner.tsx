import cx from 'classnames';
import { Icon } from 'components';
import * as React from 'react';


const Spinner = React.forwardRef<any, any>(() => {
  return <Icon icon={Icon.icons.loader} className={cx('loader', 'spinner')} />;
});

export default Spinner;
