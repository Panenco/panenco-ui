import * as React from 'react';
import * as cx from 'classnames';

import { Icon } from 'components';
import { idGenerator, sizeToString } from 'utils/helpers';
import { useTheme } from 'utils/hooks';
import { StyledSwitch } from './style';

export interface SwitchProps extends React.HTMLAttributes<HTMLElement> {
  height?: string | number;
  inputRef?: React.Ref<HTMLInputElement>;
  size?: number;
  value: boolean;
  width?: string | number;
  wrapperProps?: any;
}

export const Switch: React.FC<SwitchProps> = React.forwardRef<HTMLElement, SwitchProps>(
  (
    { id: idProp, inputRef, value = false, height, width, size = 48, className, wrapperProps, ...props }: SwitchProps,
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
        height={sizeToString(height)}
        width={sizeToString(width)}
        size={size}
        value={value}
        {...wrapperProps}
      >
        <input ref={inputRef} id={id} type='checkbox' checked={value} {...props} />
        <div className={cx('slider')}>
          <span className='round'>
            <Icon className='icon' size='sm' icon={value ? 'check' : 'minus'} />
          </span>
        </div>
      </StyledSwitch>
    );
  },
);
