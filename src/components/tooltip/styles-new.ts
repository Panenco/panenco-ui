import { styled } from 'linaria/react';
import { PUITheme, ThemeMode } from 'utils/types';

export const ReferenceBox = styled.div<{
  mode: ThemeMode;
  theme: PUITheme;
}>`
  z-index: 1;
  position: relative;
  display: inline-block;
`;


export const PopperBox = styled.div<{
  mode: ThemeMode;
  theme: PUITheme;
  show: boolean;
  [key: string]: any;
}>`
  visibility: ${(props: any): string => props.show ? 'visible' : 'hidden'};
  opacity: ${(props: any): number => props.show ? 1 : 0};
  border-radius: 5px;
  padding: 8px 12px;
  font-size: ${(props: any): string => props.theme.typography.sizes.m.textSize};
  font-family: sans-serif;
  line-height: 1;
  z-index: 100;
  background-color: ${(props: any): string =>
    props.mode === ThemeMode.dark ? props.theme.colors.base100 : props.theme.colors.base900};
  color: ${(props: any): string =>
    props.mode === ThemeMode.dark ? props.theme.colors.base900 : props.theme.colors.base100};
  transition: all .3s ease-out;

  a {
    color: ${(props: any): string =>
      props.mode === ThemeMode.dark ? props.theme.colors.base900 : props.theme.colors.base100};
    text-decoration: none;
  }
`;

export const Arrow = styled.div<{
  [key: string]: any;
}>`
  position: absolute;
  width: 20px;
  height: 12px;

  &[data-placement*='bottom'] {
    top: 0;
    left: 0;
    margin-top: -0.9em;

    &::before {
      border-width: 4px 10px 10px 10px;
      border-color: transparent transparent #232323 transparent;
    }
  }

  &[data-placement*='top'] {
    bottom: 0;
    left: 0;
    margin-bottom: -2.9em;

    &::before {
      border-width: 1em 1.5em 0 1.5em;
      border-color: #232323 transparent transparent transparent;
    }
  }

  &[data-placement*='right'] {
    left: 0;
    margin-left: -1.9em;

    &::before {
      border-width: 1.5em 1em 1.5em 0;
      border-color: transparent #232323 transparent transparent;
    }
  }

  &[data-placement*='left'] {
    right: 0;
    margin-right: -1.9em;

    &::before {
      border-width: 1.5em 0 1.5em 1em;
      border-color: transparent transparent transparent #232323;
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
