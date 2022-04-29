import { styled } from 'linaria/react';
import { PUITheme, StampVariantType, ThemeMode } from 'utils/types';

const getBackgroundColor = (backgroundColor: string, variant: any, mode: ThemeMode, darkColor: string, lightColor: string): string => {
  if (variant === 'fulfilled') return backgroundColor;
  if (mode === ThemeMode.dark) return darkColor;
  return lightColor;
};

export const StyledStamp = styled.div<{
  theme: PUITheme;
  mode: ThemeMode;
  variant?: StampVariantType;
  borderRadius?: number;
  backgroundColor?: string;
}>`
  padding: 6px 16px;
  display: flex;
  justify-content: center;
  border-radius: ${(props: any): string => props.borderRadius}px;
  font-size: 12px;
  color: ${(props: any): string => props.color};
  border: 1px solid ${(props: any): string => props.variant === 'fulfilled' ? props.backgroundColor : props.color};
  background-color: ${({ backgroundColor, variant, mode, theme: { colors } }: any): string =>
      getBackgroundColor(backgroundColor, variant, mode, colors.base900, colors.base100)};
`;
