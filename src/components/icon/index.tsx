import * as React from 'react';
import * as cx from 'classnames';

import { IconVariantSize } from 'utils/types';
import { StyledSVG } from './style';

import { defaultIcons } from './icons';

const sizeToPx = {
  sm: '16px',
  md: '24px',
  lg: '28px',
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
        { icon = 'eye', className, strokeWidth = 1.33, onClick, size = 'md', disabled, width, height, ...iconProps },
        ref,
      ): React.ReactElement<unknown, string | React.JSXElementConstructor<any>> => {
        const iconToRender = icons[size][icon] || icons.sm[icon] || icons.md[icon] || icons.lg[icon];

        return (
          <StyledSVG
            className={cx(disabled && 'disabled', 'svg', className)}
            viewBox={iconToRender.viewBox}
            width={width || sizeToPx[size]}
            height={height || sizeToPx[size]}
            strokeWidth={strokeWidth}
            onClick={onClick}
            ref={ref}
            {...iconProps}
          >
            <use xlinkHref={`#${iconToRender.id}`} />
          </StyledSVG>
        );
      },
    );

    return <Icon {...props} />;
  };

export const Icon = withIcons<typeof defaultIcons>();
export const icons = defaultIcons;
export type IconType = React.ReactElement<{ className?: string }, string | React.JSXElementConstructor<any>>;
