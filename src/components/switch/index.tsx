import * as React from 'react';
import cx from 'classnames';
import { Icon } from 'components';
import { idGenerator, sizeToNumber } from 'utils/helpers';
import { useTheme } from 'utils/hooks';
import { StyledSwitch } from './style';

export interface SwitcherProps extends React.HTMLAttributes<HTMLElement> {
  checked: boolean | undefined;
  setChecked: () => void;
  wrapperProps?: any;
  height?: string | number;
  width?: string | number;
  size?: string | number;
}

export const Switcher: React.FC<SwitcherProps> = React.forwardRef<HTMLElement, SwitcherProps>(
  (
    {
      id: idProp,
      checked = false,
      setChecked,
      height,
      width,
      size = 48,
      className,
      wrapperProps,
      ...props
    }: SwitcherProps,
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
        height={sizeToNumber(height)}
        width={sizeToNumber(width)}
        size={sizeToNumber(size)}
        checked={checked}
        {...wrapperProps}
      >
        <input id={id} type="checkbox" checked={checked} onChange={setChecked} {...props} />
        <div className={cx('slider')}>
          <span className="round">
            <Icon className="icon" icon={Icon.icons[checked ? 'check' : 'minus']} />
          </span>
        </div>
      </StyledSwitch>
    );
  },
);
