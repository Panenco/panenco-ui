import { styled } from 'linaria/react';
import { ThemeMode } from 'utils/types';
import { transparentize } from 'polished';

export const StyledContent = styled.div`
  border-radius: 4px;
  width: 100%;
  max-width: max-content;
  padding: 20px 16px;
  font-size: ${(props: any): string => props.theme.typography.sizes.s.textSize};
  line-height: ${(props: any): string => props.theme.typography.sizes.s.lineHeight};
  font-weight: ${(props: any): string => props.theme.typography.weights.regular};
  background-color: ${(props: any): string =>
    props.mode === ThemeMode.dark ? transparentize(0.4, props.theme.colors.secondary) : props.theme.colors.border};
  color: ${(props: any): string =>
    props.mode === ThemeMode.dark ? props.theme.colors.light : props.theme.colors.primary};

  .content {
    color: inherit;
  }
`;
