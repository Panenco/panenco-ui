import * as React from 'react';
import cx from 'classnames';

import { IconVariantSize } from 'utils/types';
import { StyledSVG } from './style';

import { defaultIcons } from './icons';

const sizeToPx = {
  sm: 16,
  md: 24,
  lg: 28,
};

const sizeToStrokeWidth = {
  sm: '1.33333px',
  md: '2px',
  lg: '2.33333px',
};

export type IconProps<T extends { lg: any; md: any; sm: any }> = {
  className?: string;
  disabled?: boolean;
  height?: number | string;
  icon: keyof typeof defaultIcons.sm | keyof T['sm'];
  onClick?: (e) => void;
  size?: IconVariantSize;
  strokeWidth?: number | string;
  width?: number | string;
};

export const withIcons =
  <T extends { lg: any; md: any; sm: any }>(extendIcons?: T) =>
  (props: IconProps<T>) => {
    const icons = {
      sm: { ...defaultIcons.sm, ...extendIcons?.sm },
      md: { ...defaultIcons.md, ...extendIcons?.md },
      lg: { ...defaultIcons.lg, ...extendIcons?.lg },
    };

    const Icon = React.forwardRef<any, IconProps<T>>(
      (
        { icon = 'eye', className, strokeWidth, onClick, size = 'md', disabled, width, height, ...iconProps },
        ref,
      ): React.ReactElement<unknown, string | React.JSXElementConstructor<any>> => {
        const IconToRender = icons[size][icon] || icons.sm[icon] || icons.md[icon] || icons.lg[icon];

        return (
          <StyledSVG
            as={IconToRender}
            className={cx(disabled && 'disabled', 'svg', `pui-icon-${size}`, className)}
            viewBox={`0 0 ${sizeToPx[size]} ${sizeToPx[size]}`}
            width={width || `${sizeToPx[size]}px`}
            height={height || `${sizeToPx[size]}px`}
            strokeWidth={strokeWidth || sizeToStrokeWidth[size]}
            onClick={onClick}
            ref={ref}
            {...iconProps}
          />
        );
      },
    );

    return <Icon {...props} />;
  };

export const Icon = withIcons<typeof defaultIcons>();
export const icons = defaultIcons;
export type IconType = React.ReactElement<{ className?: string }, string | React.JSXElementConstructor<any>>;
