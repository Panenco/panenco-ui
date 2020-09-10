import { styled } from 'linaria/react';
import { ThemeMode } from 'utils/types';

export const StyledLabel = styled.label`
  align-items: center;
  display: flex;
  width: max-content;

  &:focus-within {
    outline: 2px solid ${(props: any): string => props.theme.colors.outline};
  }

  &:hover {
    cursor: pointer;
    .container {
      border: ${(props: any): string => {
        if (props.borderWidth) {
          return `${props.borderWidth}px`;
        }
        return '2px';
      }} solid
        ${(props: any): string => {
          if (props.color) {
            return props.color;
          }
          return props.mode === ThemeMode.dark ? props.theme.colors.light : props.theme.colors.hover700;
        }};
    }
  }

  &.labelDisabled {
    opacity: 0.4;
    pointer-events: none;
  }

  .labelTitle {
    align-items: center;
    display: flex;
    margin-left: 8px;
    vertical-align: middle;
    color: ${(props: any): string =>
      props.mode === ThemeMode.dark ? props.theme.colors.light : props.theme.colors.primary};
  }

  .checkbox {
    border: none;
    height: 20px;
    margin: 0;
    opacity: 0;
    position: absolute;
    width: 20px;
  }

  .container {
    background-color: transparent;
    border: ${(props: any): string => {
      if (props.borderWidth) {
        return `${props.borderWidth}px`;
      }
      return '2px';
    }} solid ${(props: any): string => props.theme.colors.secondary};
    border-radius: 4px;
    box-sizing: border-box;
    position: relative;
    vertical-align: middle;
    width: 20px;
    height: 20px;

    .checkbox {
      border: none;
      height: 20px;
      margin: 0;
      opacity: 0;
      position: absolute;
      width: 20px;
    }
  }

  .tick {
    color: ${(props: any): string =>
      props.mode === ThemeMode.dark ? props.theme.colors.primary : props.theme.colors.light};
    height: 16px;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 12px;
  }

  & .checkbox:checked + .container {
    background-color: ${(props: any): string => {
      if (props.color) {
        return props.color;
      }
      return props.mode === ThemeMode.dark ? props.theme.colors.light : props.theme.colors.accent500;
    }};
    border: ${(props: any): string => {
      if (props.borderWidth) {
        return `${props.borderWidth}px`;
      }
      return '2px';
    }} solid
      ${(props: any): string => {
        if (props.color) {
          return props.color;
        }
        return props.mode === ThemeMode.dark ? props.theme.colors.light : props.theme.colors.accent500;
      }};
  }

  & .checkbox:checked {
    &:hover,
    &:active {
      & + .container {
        background-color: ${(props: any): string => {
          if (props.color) {
            return props.color;
          }
          return props.mode === ThemeMode.dark ? props.theme.colors.background50 : props.theme.colors.hover700;
        }};
        border: ${(props: any): string => {
          if (props.borderWidth) {
            return `${props.borderWidth}px`;
          }
          return '2px';
        }} solid
          ${(props: any): string => {
            if (props.color) {
              return props.color;
            }
            return props.mode === ThemeMode.dark ? props.theme.colors.background50 : props.theme.colors.hover700;
          }};
      }
    }
  }
`;
