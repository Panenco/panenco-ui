import styled from 'styled-components';
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
    props.mode === ThemeMode.dark ? transparentize(0.4, props.theme.colors.base700) : props.theme.colors.base400};
  color: ${(props: any): string =>
    props.mode === ThemeMode.dark ? props.theme.colors.base100 : props.theme.colors.base900};

  .content {
    color: inherit;
  }
`;
