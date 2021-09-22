import { styled } from 'linaria/react';
import { PUITheme, ThemeMode } from 'utils/types';
import { transparentize } from 'polished';

export const StyledContent = styled.div<{
  mode: ThemeMode;
  theme: PUITheme;
}>`
  border-radius: 4px;
  width: 100%;
  max-width: max-content;
  padding: 20px 16px;
  font-size: ${(props: any): string => props.theme.typography.sizes.m.textSize};
  line-height: ${(props: any): string => props.theme.typography.sizes.m.lineHeight};
  font-weight: ${(props: any): string => props.theme.typography.weights.regular};
  background-color: ${(props: any): string =>
    props.mode === ThemeMode.dark ? transparentize(0.4, props.theme.colors.secondary) : props.theme.colors.border};
  color: ${(props: any): string =>
    props.mode === ThemeMode.dark ? props.theme.colors.light : props.theme.colors.primary};

  .content {
    color: inherit;
  }
`;
