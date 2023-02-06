import styled from 'styled-components';
import { StampVariantType } from 'utils/types';

const getBackgroundColor = (backgroundColor: string, variant: StampVariantType, lightColor: string): string => {
  if (variant === 'fulfilled') return backgroundColor;
  return lightColor;
};

export const StyledStamp = styled.div<{
  backgroundColor?: string;
  borderRadius: number;
  color?: string;
  variant: StampVariantType;
}>`
  padding: 6px 16px;
  display: flex;
  justify-content: center;
  border-radius: ${({ borderRadius }) => borderRadius}px;
  font-size: 12px;
  color: ${({ color, theme, variant }) =>
    color || (variant === 'fulfilled' ? theme.colors.base100 : theme.colors.success)};
  border: 1px solid ${({ variant, backgroundColor, color }) => (variant === 'fulfilled' ? backgroundColor : color)};
  background-color: ${({ backgroundColor, variant, theme }) =>
    getBackgroundColor(backgroundColor || theme.colors.success, variant, theme.colors.base100)};
`;
