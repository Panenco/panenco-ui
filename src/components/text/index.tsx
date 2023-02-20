import * as React from 'react';
import styled from 'styled-components';
import { TextSize, PUIColors } from 'utils/types';

type EnumColors = keyof PUIColors;
export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * The content of the component.
   * */
  children?: React.ReactNode;
  /**
   * The color of the text.
   * */
  color?: string | EnumColors;
  /**
   * The component to render.
   * */
  component?: keyof React.ReactHTML | React.ComponentType;
  /**
   * The size of the text.
   * */
  size?: string | TextSize;
  /**
   * The weight of the text.
   * */
  weight?: string | number;
}

const StyledComponent = styled.span<{
  color: string | EnumColors;
  size: string | TextSize;
  weight: string | number;
}>`
  font-size: ${({ size, theme }): number | string => {
    if (typeof size === 'string' && Object.keys(theme.typography.sizes).includes(size)) {
      return theme.typography.sizes[size].textSize;
    }
    if (size === 'inherit') {
      return 'inherit';
    }
    if (typeof size === 'object') {
      return size.textSize;
    }
    return theme.typography.sizes.m.textSize;
  }};
  line-height: ${({ size, theme }): string | number => {
    if (typeof size === 'string' && Object.keys(theme.typography.sizes).includes(size)) {
      return theme.typography.sizes[size].lineHeight;
    }
    if (size === 'inherit') {
      return 'inherit';
    }
    if (typeof size === 'object') {
      return size.lineHeight;
    }
    return theme.typography.sizes.m.lineHeight;
  }};
  color: ${({ theme, color }): string => {
    if (typeof color === 'string' && Object.keys(theme.colors).includes(color)) {
      return theme.colors[color];
    }
    return color;
  }};
  font-weight: ${({ weight, theme }): string | number => {
    if (
      (typeof weight === 'number' || typeof weight === 'string') &&
      Object.keys(theme.typography.weights).includes(String(weight))
    ) {
      return theme.typography.weights[weight];
    }
    return weight;
  }};
`;

export const Text = React.forwardRef<HTMLElement, TextProps>(
  (
    { color = 'inherit', size = 'inherit', weight = 'inherit', children, component = 'span', ...props }: TextProps,
    ref,
  ): JSX.Element => {
    return (
      <StyledComponent as={component} color={color} size={size} weight={weight} ref={ref} {...props}>
        {children}
      </StyledComponent>
    );
  },
);
