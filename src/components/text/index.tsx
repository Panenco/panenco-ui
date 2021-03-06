import * as React from 'react';
import { styled } from 'linaria/react';
import { useTheme } from 'utils/hooks';
import { TextSize, PUIColors } from '../../utils/types';

type EnumColors = keyof PUIColors;
export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  color?: string | EnumColors;
  weight?: string | number;
  size?: string | TextSize;
  component?: 'p' | 'span';
}

const StyledSpan = styled.span`
  display: inline-block;
  font-size: ${(props: any): number | string => {
    if (typeof props.size === 'string' && Object.keys(props.theme.typography.sizes).includes(props.size)) {
      return props.theme.typography.sizes[props.size].textSize;
    }
    if (props.size === 'inherit') {
      return 'inherit';
    }
    return props.size.textSize;
  }};
  line-height: ${(props: any): string | number => {
    if (typeof props.size === 'string' && Object.keys(props.theme.typography.sizes).includes(props.size)) {
      return props.theme.typography.sizes[props.size].lineHeight;
    }
    if (props.size === 'inherit') {
      return 'inherit';
    }
    return props.size.lineHeight;
  }};
  color: ${(props: any): string => {
    if (typeof props.size === 'string' && Object.keys(props.theme.colors).includes(props.color)) {
      return props.theme.colors[props.color];
    }
    return props.color;
  }};
  font-weight: ${(props: any): string | number => {
    if (
      (typeof props.weight === 'number' || typeof props.weight === 'string') &&
      Object.keys(props.theme.typography.weights).includes(props.weight)
    ) {
      return props.theme.typography.weights[props.weight];
    }
    return props.weight;
  }};
`;

// TODO duplicated code
const StyledParagraph = styled.p`
  font-size: ${(props: any): number | string => {
    if (typeof props.size === 'string' && Object.keys(props.theme.typography.sizes).includes(props.size)) {
      return props.theme.typography.sizes[props.size].textSize;
    }
    if (props.size === 'inherit') {
      return 'inherit';
    }
    return props.size.textSize;
  }};
  line-height: ${(props: any): string | number => {
    if (typeof props.size === 'string' && Object.keys(props.theme.typography.sizes).includes(props.size)) {
      return props.theme.typography.sizes[props.size].lineHeight;
    }
    if (props.size === 'inherit') {
      return 'inherit';
    }
    return props.size.lineHeight;
  }};
  color: ${(props: any): string => {
    if (typeof props.size === 'string' && Object.keys(props.theme.colors).includes(props.color)) {
      return props.theme.colors[props.color];
    }
    return props.color;
  }};
  font-weight: ${(props: any): string | number => {
    if (
      (typeof props.weight === 'number' || typeof props.weight === 'string') &&
      Object.keys(props.theme.typography.weights).includes(props.weight)
    ) {
      return props.theme.typography.weights[props.weight];
    }
    return props.weight;
  }};
`;

export const Text = React.forwardRef<HTMLElement, TextProps>(
  (
    { color = 'inherit', size = 'inherit', weight = 'inherit', children, component, ...props }: TextProps,
    ref,
  ): JSX.Element => {
    const theme = useTheme();
    const StyledComponent = component === 'p' ? StyledParagraph : StyledSpan;

    return (
      <StyledComponent theme={theme} color={color} size={size} weight={weight} ref={ref} {...props}>
        {children}
      </StyledComponent>
    );
  },
);
