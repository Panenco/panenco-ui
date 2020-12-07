import * as React from 'react';
import cx from 'classnames';
import { idGenerator } from 'utils/helpers';
import { useTheme } from 'utils/hooks';
import { StyledSwitch } from './style';

export interface SwitchProps extends React.HTMLAttributes<HTMLElement> {
  checked: any;
  setChecked: any;
  wrapperProps?: any;
}

export const Switch: React.FC<SwitchProps> = React.forwardRef<HTMLElement, SwitchProps>(
  ({ id: idProp, checked = false, setChecked, className, wrapperProps, ...props }: SwitchProps, ref): any => {
    const theme = useTheme();
    const id = idProp || idGenerator();

    return (
      <StyledSwitch theme={theme} className={cx('switch', className)} htmlFor={id} ref={ref} {...wrapperProps}>
        <input id={id} type="checkbox" checked={checked} onChange={setChecked} {...props} />
        <span className={cx('slider', 'round')} />
      </StyledSwitch>
    );
  },
);
