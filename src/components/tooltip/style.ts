import { styled } from 'linaria/react';
import { ThemeMode, PUITheme } from 'utils/types';

const arrowSize = '6px';
const tooltipMargin = '40px';

export const StyledTooltip = styled.div<{
  mode: ThemeMode;
  theme: PUITheme;
}>`
  display: inline-block;
  position: relative;

  & .tooltip {
    position: absolute;
    border-radius: 5px;
    left: 50%;
    transform: translateX(-50%);
    padding: 8px 12px;
    font-size: ${(props: any): string => props.theme.typography.sizes.m.textSize};
    font-family: sans-serif;
    line-height: 1;
    z-index: 100;
    white-space: nowrap;
    background-color: ${(props: any): string =>
      props.mode === ThemeMode.dark ? props.theme.colors.light : props.theme.colors.primary};
    color: ${(props: any): string =>
      props.mode === ThemeMode.dark ? props.theme.colors.primary : props.theme.colors.light};

    &:before {
      content: ' ';
      left: 50%;
      border: solid transparent;
      height: 0;
      width: 0;
      position: absolute;
      pointer-events: none;
      border-width: ${arrowSize};
      margin-left: calc(${arrowSize} * -1);
    }

    &.top {
      top: calc(${tooltipMargin} * -1);

      &:before {
        top: 100%;
        border-top-color: ${(props: any): string =>
          props.mode === ThemeMode.dark ? props.theme.colors.light : props.theme.colors.primary};
      }
    }

    &.right {
      left: calc(100% + ${tooltipMargin});
      top: 50%;
      transform: translateX(0) translateY(-50%);

      &:before {
        left: calc(${arrowSize} * -1);
        top: 50%;
        transform: translateX(0) translateY(-50%);
        border-right-color: ${(props: any): string =>
          props.mode === ThemeMode.dark ? props.theme.colors.light : props.theme.colors.primary};
      }
    }

    &.bottom {
      bottom: calc(${tooltipMargin} * -1);

      &:before {
        bottom: 100%;
        border-bottom-color: ${(props: any): string =>
          props.mode === ThemeMode.dark ? props.theme.colors.light : props.theme.colors.primary};
      }
    }

    &.left {
      left: auto;
      right: calc(100% + ${tooltipMargin});
      top: 50%;
      transform: translateX(0) translateY(-50%);

      &:before {
        left: auto;
        right: calc(${arrowSize} * -2);
        top: 50%;
        transform: translateX(0) translateY(-50%);
        border-left-color: ${(props: any): string =>
          props.mode === ThemeMode.dark ? props.theme.colors.light : props.theme.colors.primary};
      }
    }
  }
`;
