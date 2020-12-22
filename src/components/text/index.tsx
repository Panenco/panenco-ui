import * as React from 'react';
import { styled } from 'linaria/react';
import { useTheme } from 'utils/hooks';
import { TextSize } from '../../utils/types';

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  color?: string;
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
  color: ${(props: any): string => props.color};
  font-weight: ${(props: any): string | number => {
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
  color: ${(props: any): string => props.color};
  font-weight: ${(props: any): string | number => {
    return props.weight;
  }};
`;

export const Text: React.FC<TextProps> = React.forwardRef<HTMLElement, TextProps>(
  ({ color = 'inherit', size = 'inherit', weight = 'inherit', children, component, ...props }: TextProps, ref): any => {
    const theme = useTheme();
    const StyledComponent = component === 'p' ? StyledParagraph : StyledSpan;

    return (
      <StyledComponent theme={theme} color={color} size={size} weight={weight} ref={ref} {...props}>
        {children}
      </StyledComponent>
    );
  },
);
