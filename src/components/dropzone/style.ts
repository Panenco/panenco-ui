import { styled } from 'linaria/react';
import { PUITheme, ThemeMode } from 'utils/types';
import { transparentize } from 'polished';

export const StyledDropzone = styled.div<{
  theme: PUITheme;
  mode: ThemeMode;
  loading?: boolean;
  isDragActive?: boolean;
  error?: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 4px;
  width: 100%;
  height: 100%;
  padding: 40px 56px;
  border-style: solid;
  background-color: ${(props: any): string => {
    if (props.loading) {
      return props.mode === ThemeMode.dark
        ? transparentize(0.4, props.theme.colors.secondary)
        : props.theme.colors.border;
    }
    return props.mode === ThemeMode.dark ? props.theme.colors.dark : props.theme.colors.highlight;
  }};
  border-width: ${(props: any): string => {
    if (props.error) {
      return '2px';
    }
    return props.isDragActive ? '2px' : '1px';
  }};
  border-color: ${(props: any): string => {
    if (props.error) {
      return props.theme.colors.error;
    }
    if (props.isDragActive) {
      return props.mode === ThemeMode.dark ? props.theme.colors.light : props.theme.colors.accent;
    }
    return props.mode === ThemeMode.dark ? props.theme.colors.secondary : props.theme.colors.highlight;
  }};
  color: ${(props: any): string => {
    if (props.loading) {
      return props.mode === ThemeMode.dark ? props.theme.colors.light : props.theme.colors.hover;
    }
    return props.mode === ThemeMode.dark ? props.theme.colors.secondary : props.theme.colors.accent;
  }};
  outline: none;

  &:focus {
    box-shadow: 0 0 0 2px ${(props: any): string => props.theme.colors.outline};
  }

  &:hover {
    cursor: pointer;
    outline: 2px solid
      ${(props: any): string => {
        if (props.color) {
          return props.color;
        }
        if (props.mode === ThemeMode.dark) {
          return props.theme.colors.light;
        }
        return props.theme.colors.accent;
      }};
  }

  .icon {
    display: flex;
    flex-shrink: 0;
    width: 16px;
    height: 16px;
    margin-bottom: 20px;
    color: ${(props: any): string => {
      if (props.error) {
        return props.theme.colors.error;
      }
      if (props.isDragActive) {
        return props.mode === ThemeMode.dark ? props.theme.colors.light : props.theme.colors.hover;
      }
      return props.mode === ThemeMode.dark ? props.theme.colors.secondary : props.theme.colors.accent;
    }};
  }

  .content {
    color: ${(props: any): string => {
      if (props.isDragActive) {
        return props.mode === ThemeMode.dark ? props.theme.colors.light : props.theme.colors.hover;
      }
      return props.mode === ThemeMode.dark ? props.theme.colors.secondary : props.theme.colors.accent;
    }};
    text-align: center;

    &Loading {
      color: ${(props: any): string =>
        props.mode === ThemeMode.dark ? props.theme.colors.light : props.theme.colors.secondary};
      margin-top: 20px;
    }
  }
`;
