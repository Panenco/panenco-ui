import * as React from 'react';
import { styled } from 'linaria/react';
import { sizes, colors } from 'styles';
import { useTheme } from 'utils/hooks';
export interface TextProps extends React.HTMLAttributes<HTMLSpanElement> {
  color?: any;
  weight?: any;
  size?: any;
}

const StyledSpan = styled.span`
  display: inline-block;
  font-size: ${(props: any): any => {
    if (typeof props.size === 'string') {
      return props.theme.typography.sizes[props.size].textSize;
    }
    return props.size.textSize;
  }};
  line-height: ${(props: any): any => {
    if (typeof props.size === 'string') {
      return props.theme.typography.sizes[props.size].lineHeight;
    }
    return props.size.lineHeight;
  }};
  color: ${(props: any): any => props.color};
  font-weight: ${(props: any): any => {
    return props.weight;
  }};
`;

export const Text: React.FC<TextProps> = React.forwardRef<HTMLSpanElement, TextProps>(
  ({ color = colors.primary, size = sizes.s, weight = 'inherit', children, ...props }: TextProps, ref): JSX.Element => {
    const theme = useTheme();
    return (
      <StyledSpan theme={theme} color={color} size={size} weight={weight} ref={ref} {...props}>
        {children}
      </StyledSpan>
    );
  },
);
