import { styled } from 'linaria/react';
import { ThemeMode } from 'utils/types';
import { Link } from 'react-router-dom';

export const StyledButton = styled.button`
  position: relative;
  border: 2px solid transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px 22px;

  min-height: 40px;
  border-radius: 4px;
  transition: 0.3s;
  font-weight: ${(props: any): any => props.theme.typography.weights.bold};
  background-color: ${(props: any): string =>
    props.mode === ThemeMode.dark ? props.theme.colors.dark : props.theme.colors.light};
  color: ${(props: any): string =>
    props.mode === ThemeMode.dark ? props.theme.colors.light : props.theme.colors.accent500};
  cursor: pointer;

  &.disabled {
    opacity: 0.3;
    pointer-events: none !important;
  }
  &.iconLeft {
    padding: 14px 22px 14px 16px;
  }
  &.iconRight {
    padding: 14px 16px 14px 22px;
  }

  &:focus {
    box-shadow: 0 0 0 2px ${(props: any): string => props.theme.colors.outline};
  }

  &:hover {
    color: ${(props: any): string =>
      props.mode === ThemeMode.dark ? props.theme.colors.background50 : props.theme.colors.hover700};
  }

  &:active {
    outline: none;
  }

  .buttonTitle {
    color: inherit;
  }

  .buttonIcon {
    &Right {
      margin-left: 8px;
    }

    &Left {
      margin-right: 8px;
    }

    &Default {
      right: 8px;
    }
  }

  &.buttonPrimary {
    background-color: ${(props: any): string =>
      props.mode === ThemeMode.dark ? props.theme.colors.light : props.theme.colors.accent500};
    color: ${(props: any): string =>
      props.mode === ThemeMode.dark ? props.theme.colors.primary : props.theme.colors.light};

    &:hover {
      background-color: ${(props: any): string =>
        props.mode === ThemeMode.dark ? props.theme.colors.background50 : props.theme.colors.hover700};
      color: ${(props: any): string =>
        props.mode === ThemeMode.dark ? props.theme.colors.primary : props.theme.colors.light};
    }

    &:active {
      background-color: ${(props: any): string =>
        props.mode === ThemeMode.dark ? props.theme.colors.background50 : props.theme.colors.hover700};
    }
  }

  &.buttonSecondary {
    border: 2px solid
      ${(props: any): string =>
        props.mode === ThemeMode.dark ? props.theme.colors.light : props.theme.colors.accent500};

    &:hover {
      border: 2px solid
        ${(props: any): string =>
          props.mode === ThemeMode.dark ? props.theme.colors.background50 : props.theme.colors.hover700};
      background-color: ${(props: any): string =>
        props.mode === ThemeMode.dark ? props.theme.colors.dark : props.theme.colors.background50};
      color: ${(props: any): string =>
        props.mode === ThemeMode.dark ? props.theme.colors.light : props.theme.colors.hover700};
    }

    &:active {
      background-color: ${(props: any): string =>
        props.mode === ThemeMode.dark ? props.theme.colors.dark : props.theme.colors.background50};
    }
  }
`;

export const StyledLink = styled(Link)`
  position: relative;
  border: 2px solid transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: inherit;
  padding: 14px 22px;
  min-height: 40px;
  border-radius: 4px;
  transition: 0.3s;
  font-weight: ${(props: any): any => props.theme.typography.weights.bold};
  background-color: ${(props: any): string =>
    props.mode === ThemeMode.dark ? props.theme.colors.dark : props.theme.colors.light};
  color: ${(props: any): string =>
    props.mode === ThemeMode.dark ? props.theme.colors.light : props.theme.colors.accent500};
  cursor: pointer;

  &.disabled {
    opacity: 0.3;
    pointer-events: none !important;
  }
  &.iconLeft {
    padding: 14px 22px 14px 16px;
  }
  &.iconRight {
    padding: 14px 16px 14px 22px;
  }

  &:focus {
    box-shadow: 0 0 0 2px ${(props: any): string => props.theme.colors.outline};
  }

  &:hover {
    color: ${(props: any): string =>
      props.mode === ThemeMode.dark ? props.theme.colors.background50 : props.theme.colors.hover700};
  }

  &:active {
    outline: none;
  }

  .buttonTitle {
    color: inherit;
  }

  .buttonIcon {
    &Right {
      margin-left: 8px;
    }

    &Left {
      margin-right: 8px;
    }

    &Default {
      right: 8px;
    }
  }

  &.buttonPrimary {
    background-color: ${(props: any): string =>
      props.mode === ThemeMode.dark ? props.theme.colors.light : props.theme.colors.accent500};
    color: ${(props: any): string =>
      props.mode === ThemeMode.dark ? props.theme.colors.primary : props.theme.colors.light};

    &:hover {
      background-color: ${(props: any): string =>
        props.mode === ThemeMode.dark ? props.theme.colors.background50 : props.theme.colors.hover700};
      color: ${(props: any): string =>
        props.mode === ThemeMode.dark ? props.theme.colors.primary : props.theme.colors.light};
    }

    &:active {
      background-color: ${(props: any): string =>
        props.mode === ThemeMode.dark ? props.theme.colors.background50 : props.theme.colors.hover700};
    }
  }

  &.buttonSecondary {
    border: 2px solid
      ${(props: any): string =>
        props.mode === ThemeMode.dark ? props.theme.colors.light : props.theme.colors.accent500};

    &:hover {
      border: 2px solid
        ${(props: any): string =>
          props.mode === ThemeMode.dark ? props.theme.colors.background50 : props.theme.colors.hover700};
      background-color: ${(props: any): string =>
        props.mode === ThemeMode.dark ? props.theme.colors.dark : props.theme.colors.background50};
      color: ${(props: any): string =>
        props.mode === ThemeMode.dark ? props.theme.colors.light : props.theme.colors.hover700};
    }

    &:active {
      background-color: ${(props: any): string =>
        props.mode === ThemeMode.dark ? props.theme.colors.dark : props.theme.colors.background50};
    }
  }
`;
