import * as React from 'react';
import cx from 'classnames';

import { IconVariantSize } from 'utils/types';
import { StyledSVG } from './style';

import { defaultIcons } from './icons';

import animatedClock from './icons/animated-clock/animated-clock.svg';

const sizeToPx = {
  sm: '16px',
  md: '24px',
  lg: '28px',
};

type IconProps<T extends { sm: any; md: any; lg: any }> = {
  icon: keyof typeof defaultIcons.sm | keyof T['sm'];
  size?: IconVariantSize;
  disabled?: boolean;
  width?: number | string;
  height?: number | string;
  className?: string;
  onClick?: () => void;
};

export const withIcons =
  <T extends { sm: any; md: any; lg: any }>(extendIcons?: T) =>
  (props: IconProps<T>) => {
    const icons = {
      sm: { ...defaultIcons.sm, ...extendIcons?.sm },
      md: { ...defaultIcons.md, ...extendIcons?.md },
      lg: { ...defaultIcons.lg, ...extendIcons?.lg },
    };

    const Icon = React.forwardRef<any, IconProps<T>>(
      ({ icon = 'eye', className, onClick, size = 'md', disabled, width, height, ...iconProps }, ref): JSX.Element => {
        const iconToRender = icons[size][icon] || icons.sm[icon] || icons.md[icon] || icons.lg[icon];
        return (
          <StyledSVG
            className={cx(disabled && 'disabled', 'svg', className)}
            viewBox={iconToRender.viewBox}
            width={width || sizeToPx[size]}
            height={height || sizeToPx[size]}
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

const newIcons = { sm: { aaaa: animatedClock }, md: { aaaa: animatedClock }, lg: { aaaa: animatedClock } } as const;
export const NewIcon = withIcons<typeof newIcons>(newIcons);
