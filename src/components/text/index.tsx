import * as React from 'react';
import { styled } from 'linaria/react';
import { sizes } from 'styles';
import { useTheme } from 'utils/hooks';

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  color?: any;
  weight?: any;
  size?: any;
  component?: string;
}


const StyledSpan =  styled.span`
  display: inline-block;
  font-size: ${(props: any): any => {
    if (typeof props.size === 'string' && Object.keys(props.theme.typography.sizes).includes(props.size)) {
      return props.theme.typography.sizes[props.size].textSize;
    }
    return props.size.textSize;
  }};
  line-height: ${(props: any): any => {
    if (typeof props.size === 'string' && Object.keys(props.theme.typography.sizes).includes(props.size)) {
      return props.theme.typography.sizes[props.size].lineHeight;
    }
    return props.size.lineHeight;
  }};
  color: ${(props: any): any => props.color};
  font-weight: ${(props: any): any => {
    return props.weight;
  }};
`;

// TODO duplicated code 
const StyledParagraph =  styled.p`
  display: inline-block;
  font-size: ${(props: any): any => {
    if (typeof props.size === 'string' && Object.keys(props.theme.typography.sizes).includes(props.size)) {
      return props.theme.typography.sizes[props.size].textSize;
    }
    return props.size.textSize;
  }};
  line-height: ${(props: any): any => {
    if (typeof props.size === 'string' && Object.keys(props.theme.typography.sizes).includes(props.size)) {
      return props.theme.typography.sizes[props.size].lineHeight;
    }
    return props.size.lineHeight;
  }};
  color: ${(props: any): any => props.color};
  font-weight: ${(props: any): any => {
    return props.weight;
  }};
`;

export const Text: React.FC<TextProps> = React.forwardRef<HTMLElement , TextProps>(
  ({ color = 'inherit', size = sizes.s, weight = 'inherit', children, component, ...props }: TextProps, ref): any=> {
    const theme = useTheme();
    const StyledComponent = component === 'p' ? StyledParagraph : StyledSpan;
    
    return( 
      <StyledComponent theme={theme} color={color} size={size} weight={weight} ref={ref} {...props}>
        {children}
      </StyledComponent>
    )
  },
);
