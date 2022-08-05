import * as React from 'react';
import cx from 'classnames';

import { IconVariantSize } from 'utils/types';
import { StyledSVG } from './style';

import { icons, iconsList } from './icons';

import animatedClock from './icons/animated-clock/animated-clock.svg';

const sizeToPx = {
  sm: '16px',
  md: '24px',
  lg: '28px',
};

export interface IconProps extends React.SVGAttributes<SVGElement> {
  // icon: typeof iconsList[number];
  icon: keyof typeof icons.sm;
  disabled?: boolean;
  size?: IconVariantSize;
  width?: number | string;
  height?: number | string;
}

type BaseIcons<T extends string | number | symbol> = Record<IconVariantSize, Record<T, any>>;

interface CompoundedComponent<T extends string | number | symbol> extends React.ForwardRefExoticComponent<IconProps> {
  icons: BaseIcons<T>;
}

// interface CompoundedComponent extends React.ForwardRefExoticComponent<IconProps> {
//   icons: { [key: string]: any };
// }

export const Icon = React.forwardRef<any, IconProps>(
  ({ icon = 'eye', className, onClick, size = 'sm', disabled, width, height, ...props }, ref): JSX.Element => {
    const iconToRender = Icon.icons[size][icon] || icons.lg[icon] || icons.md[icon] || icons.sm[icon] || 'eye';
    // const kel = typeof icon;
    return (
      <StyledSVG
        className={cx(disabled && 'disabled', 'svg', className)}
        viewBox={iconToRender.viewBox}
        width={sizeToPx[size] || width}
        height={sizeToPx[size] || height}
        onClick={onClick}
        ref={ref}
        {...props}
      >
        <use xlinkHref={`#${iconToRender.id}`} />
      </StyledSVG>
    );
  },
) as CompoundedComponent<keyof typeof icons.sm>;

Icon.icons = icons;

export const withExtraIcons = <T extends string | number | symbol>(
  newIcons: Record<IconVariantSize, Record<T, any>>,
): CompoundedComponent<T | keyof typeof Icon.icons.sm> => {
  // const component: typeof Icon extends React.ForwardRefExoticComponent<IconProps extends {icon: keyof typeof icons.sm extends keyof typeof newIcons.sm}> = Object.assign(Icon);
  const component: typeof Icon = Object.assign(Icon);
  component.icons = {
    sm: { ...component.icons.sm, ...newIcons.sm },
    lg: { ...component.icons.lg, ...newIcons.lg },
    md: { ...component.icons.md, ...newIcons.md },
  };

  return component as CompoundedComponent<T | keyof typeof Icon.icons.sm>;
};

const newIcons = { sm: { animatedClock }, md: { animatedClock }, lg: { animatedClock } };

const NewIcon = withExtraIcons(newIcons);
