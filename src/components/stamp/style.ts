import styled from 'styled-components';
import { PUITheme, StampVariantType } from 'utils/types';

const getBackgroundColor = (backgroundColor: string, variant: any, lightColor: string): string => {
  if (variant === 'fulfilled') return backgroundColor;
  return lightColor;
};

export const StyledStamp = styled.div<{
  backgroundColor?: string;
  borderRadius?: number;
  theme: PUITheme;
  variant?: StampVariantType;
}>`
  padding: 6px 16px;
  display: flex;
  justify-content: center;
  border-radius: ${(props: any): string => props.borderRadius}px;
  font-size: 12px;
  color: ${(props: any): string => props.color};
  border: 1px solid ${(props: any): string => (props.variant === 'fulfilled' ? props.backgroundColor : props.color)};
  background-color: ${({ backgroundColor, variant, theme: { colors } }: any): string =>
    getBackgroundColor(backgroundColor, variant, colors.base100)};
`;
