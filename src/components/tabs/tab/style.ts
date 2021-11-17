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
    color: ${(props: any): string => props.theme.colors.base700};
    border-bottom: 1px solid ${(props: any): string => props.theme.colors.base700};

    &.selected {
      color: ${(props: any): string => props.theme.colors.base900};
      border-bottom: 3px solid ${(props: any): string => props.theme.colors.primary500};
      padding-bottom: 10px;
    }
  }

  &.bookmarkTab {
    color: ${(props: any): string => props.theme.colors.base900};

    &.selected {
      background-color: ${(props: any): string => props.theme.colors.base100};
      border-top: 3px solid ${(props: any): string => props.theme.colors.primary500};
      padding-top: 9px;
      &:hover {
        background-color: ${(props: any): string => props.theme.colors.primary200};
      }
    }
  }
`;
