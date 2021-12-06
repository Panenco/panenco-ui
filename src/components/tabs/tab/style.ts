import { styled } from 'linaria/react';
import { PUITheme, ThemeMode } from 'utils/types';

export const StyledTab = styled.button<{
  theme: PUITheme;
  mode: ThemeMode;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 22px;
  margin: 0;
  border: 0;
  background-color: transparent;

  .iconClass {
    height: 20px;
    width: 20px;
    margin-right: 10px;
  }

  &:hover {
    background-color: ${(props: any): string => props.theme.colors.primary200};
  }

  &:focus {
    outline: 2px solid ${(props: any): string => props.theme.colors.base900};
    outline-offset: 0;
    z-index: 1;
  }

  &.disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  &.tab {
    border-bottom: 1px solid ${(props: any): string => props.theme.colors.base700};
    color: ${(props: any): string => props.theme.colors.base700};

    &.selected {
      padding-bottom: 10px;
      border-bottom: 3px solid ${(props: any): string => props.theme.colors.primary500};
      color: ${(props: any): string => props.theme.colors.base900};
    }

    &:not(.selected) {
      cursor: pointer;
    }
  }

  &.bookmarkTab {
    color: ${(props: any): string => props.theme.colors.base900};

    &.selected {
      padding-top: 9px;
      border-top: 3px solid ${(props: any): string => props.theme.colors.primary500};
      background-color: ${(props: any): string => props.theme.colors.base100};

      &:hover {
        background-color: ${(props: any): string => props.theme.colors.primary200};
      }
    }

    &:not(.selected) {
      cursor: pointer;
    }
  }
`;
