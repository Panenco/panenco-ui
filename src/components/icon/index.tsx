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
  icon: keyof typeof iconsList[number];
  disabled?: boolean;
  size?: IconVariantSize;
  width?: number | string;
  height?: number | string;
}

interface CompoundedComponent<T extends string | number | symbol> extends React.ForwardRefExoticComponent<IconProps> {
  icons: Record<IconVariantSize, Record<T, any>>;
}

// interface CompoundedComponent extends React.ForwardRefExoticComponent<IconProps> {
//   icons: { [key: string]: any };
// }

export const Icon = React.forwardRef<any, IconProps>(
  ({ icon = 'eye', className, onClick, size = 'sm', disabled, width, height, ...props }, ref): JSX.Element => {
    const iconToRender = Icon.icons[size][icon] || icons.lg[icon] || icons.md[icon] || icons.sm[icon];
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
) as CompoundedComponent<keyof typeof icons>;

Icon.icons = icons;

/* <Icon icon='big' size='sm' />;

const withExtraIcons = <T extends keyof typeof Icon.icons>(newIcons: Record<T, any>): CompoundedComponent<T> => {
  // const component: typeof Icon extends React.ForwardRefExoticComponent<IconProps extends {icon: keyof typeof iconsList[number] extends keyof typeof newIcons}> = Object.assign(Icon);
  const component: typeof Icon = Object.assign(Icon);
  component.icons = { ...component.icons, ...newIcons };

  return component;
};
const newIcons = { sm: { animatedClock }, md: { animatedClock } }

const CustomIcon = withExtraIcons(newIcons);

<CustomIcon icon= size='sm' />; */
