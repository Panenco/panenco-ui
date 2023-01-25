import * as React from 'react';
import cx from 'classnames';

import { Icon } from 'components';
import { idGenerator, sizeToString } from 'utils/helpers';
import { StyledSwitch } from './style';

export interface SwitchProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Height of the switch.
   * */
  height?: string | number;
  /**
   * Id of the input element.
   * */
  id?: string;
  /**
   * Ref of the input element.
   * */
  inputRef?: React.Ref<HTMLInputElement>;
  /**
   * Size of the switch.
   * */
  size?: number;
  /**
   * Value of the switch.
   * */
  value: boolean;
  /**
   * Width of the switch.
   * */
  width?: string | number;
  /**
   * Props to be passed to the wrapper.
   * */
  wrapperProps?: React.HTMLAttributes<HTMLLabelElement>;
}

export const Switch: React.FC<SwitchProps> = React.forwardRef<HTMLLabelElement, SwitchProps>(
  (
    { id: idProp, inputRef, value = false, height, width, size = 48, className, wrapperProps, ...props }: SwitchProps,
    ref,
  ): JSX.Element => {
    const id = idProp || idGenerator();
    return (
      <StyledSwitch
        className={cx('switch', className)}
        htmlFor={id}
        ref={ref}
        height={sizeToString(height)}
        width={sizeToString(width)}
        size={size}
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
