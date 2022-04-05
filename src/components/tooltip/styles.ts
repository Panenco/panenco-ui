import { styled } from 'linaria/react';
import { PUITheme, ThemeMode } from 'utils/types';

export const ReferenceBox = styled.div<{
  mode: ThemeMode;
  theme: PUITheme;
  [key: string]: any;
}>`
  z-index: 1;
  position: relative;
  display: inline-block;
`;

export const PopperWrapper = styled.div<{
  mode: ThemeMode;
  theme: PUITheme;
  [key: string]: any;
}>`
  display: inline-block;
`;

export const PopperBox = styled.div<{
  mode: ThemeMode;
  theme: PUITheme;
  show: boolean;
  backgroundColor?: string;
  textColor?: string;
  linkColor?: string;
  [key: string]: any;
}>`
  visibility: ${(props: any): string => (props.show ? 'visible' : 'hidden')};
  opacity: ${(props: any): number => (props.show ? 1 : 0)};
  border-radius: 5px;
  padding: 8px 12px;
  font-size: ${(props: any): string => props.theme.typography.sizes.m.textSize};
  font-family: sans-serif;
  line-height: 1;
  z-index: 100;
  background-color: ${(props: any): string => {
    if (props.backgroundColor) return props.backgroundColor;
    return props.mode === ThemeMode.dark ? props.theme.colors.base100 : props.theme.colors.base900;
  }};
  color: ${(props: any): string => {
    if (props.textColor) return props.textColor;
    return props.mode === ThemeMode.dark ? props.theme.colors.base900 : props.theme.colors.base100;
  }};
  transition: all 0.3s ease-out;

  a {
    color: ${(props: any): string => {
      if (props.linkColor) return props.linkColor;
      return props.mode === ThemeMode.dark ? props.theme.colors.base900 : props.theme.colors.base100;
    }};
    text-decoration: none;
  }
`;

export const Arrow = styled.div<{
  backgroundColor?: string;
  [key: string]: any;
}>`
  position: absolute;
  width: 20px;
  height: 12px;

  &[data-placement*='bottom'] {
    top: 1px;
    left: 0;
    margin-top: -0.9em;

    &::before {
      border-width: 4px 10px 10px 10px;
      border-color: transparent transparent
        ${(props: any): string => {
          if (props.backgroundColor) return props.backgroundColor;
          return props.mode === ThemeMode.dark ? props.theme.colors.base100 : props.theme.colors.base900;
        }}
        transparent;
    }
  }

  &[data-placement*='top'] {
    bottom: 1px;
    left: 0;
    margin-bottom: -0.8em;

    &::before {
      border-width: 10px 10px 4px 10px;
      border-color: ${(props: any): string => {
          if (props.backgroundColor) return props.backgroundColor;
          return props.mode === ThemeMode.dark ? props.theme.colors.base100 : props.theme.colors.base900;
        }}
        transparent transparent transparent;
    }
  }

  &[data-placement*='right'] {
    width: 12px;
    height: 20px;
    left: 0;
    margin-left: -1em;

    &::before {
      border-width: 10px 10px 10px 6px;
      border-color: transparent
        ${(props: any): string => {
          if (props.backgroundColor) return props.backgroundColor;
          return props.mode === ThemeMode.dark ? props.theme.colors.base100 : props.theme.colors.base900;
        }}
        transparent transparent;
    }
  }

  &[data-placement*='left'] {
    width: 12px;
    height: 20px;
    right: 0;
    margin-right: -0.7em;

    &::before {
      border-width: 10px 4px 10px 10px;
      border-color: transparent transparent transparent
        ${(props: any): string => {
          if (props.backgroundColor) return props.backgroundColor;
          return props.mode === ThemeMode.dark ? props.theme.colors.base100 : props.theme.colors.base900;
        }};
    }
  }

  &::before {
    content: '';
    margin: auto;
    display: block;
    width: 0;
    height: 0;
    border-style: solid;
  }
`;
