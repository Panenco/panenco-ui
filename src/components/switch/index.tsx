import * as React from 'react';
import cx from 'classnames';
import { idGenerator } from 'utils/helpers';
import { useTheme } from 'utils/hooks';
import { StyledSwitch } from './style';

export interface SwitcherProps extends React.HTMLAttributes<HTMLElement> {
  checked: boolean;
  setChecked: () => void;
  wrapperProps?: any;
  height?: string | number;
  width?: string | number;
}

export const Switcher: React.FC<SwitcherProps> = React.forwardRef<HTMLElement, SwitcherProps>(
  (
    { id: idProp, checked = false, setChecked, height, width, className, wrapperProps, ...props }: SwitcherProps,
    ref,
  ): JSX.Element => {
    const theme = useTheme();
    const id = idProp || idGenerator();

    return (
      <StyledSwitch
        theme={theme}
        className={cx('switch', className)}
        htmlFor={id}
        ref={ref}
        height={height}
        width={width}
        {...wrapperProps}
      >
        <input id={id} type="checkbox" checked={checked} onChange={setChecked} {...props} />
        <span className={cx('slider', 'round')} />
      </StyledSwitch>
    );
  },
);
