import { styled } from 'linaria/react';
import { ThemeMode, PUITheme } from 'utils/types';

export const StyledPagination = styled.div<{
  theme: PUITheme;
  mode: ThemeMode;
}>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: ${(props: any): any => `1px solid ${props.theme.colors.base700}`};
  border-radius: 8px;
  padding: 16px 32px;

  .pagination {
    &Select {
      margin-left: 5px;
      height: 28px;
      width: 60px;
    }

    &Button {
      align-items: center;
      padding: 0 5px;
      border: 1px solid transparent;
      display: flex;
      height: 28px;
      min-height: 28px;
      justify-content: center;
      text-decoration: none;
      width: 28px;
      border-bottom: none;
      background-color: transparent;
      cursor: pointer;

      &:hover {
        border-bottom: none;
      }

      &:focus {
        border-bottom: none;
      }

      &:last-child {
        margin-left: 5px;
      }

      &Icon {
        color: ${(props: any): any => props.theme.colors.base700};
        height: 16px;
        width: 16px;

        &NoMargin {
          margin: 0;
        }
      }

      &Disabled {
        opacity: 0.4;
        pointer-events: none;
      }
    }

    &Section {
      align-items: center;
      display: flex;
    }

    &Divider {
      background: ${(props: any): any => `${props.theme.colors.base700}`};
      height: 24px;
      width: 1px;

      &Left {
        margin: 0 12px 0 24px;
      }

      &Right {
        margin: 0 24px 0 12px;
      }
    }
  }
`;

export const StyledListPagination = styled.div<{
  theme: PUITheme;
  mode: ThemeMode;
  variant?: 'contained' | 'outlined' | 'text';
}>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .pagination {
    &List {
      &Item {
        padding: 0 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: 32px;
        height: 32px;
        border: ${(props: any): any =>
          props.variant === 'contained' ? `1px solid ${props.theme.colors.base700}` : 'none'};
        border-radius: 3px;
        margin-left: 8px;
        color: ${(props: any): any => `${props.theme.colors.base900}`};
        min-height: auto;
        font-weight: 400;
        background-color: transparent;
        font-size: 16px;
        cursor: pointer;

        &:hover {
          background-color: ${(props: any): any => `${props.theme.colors.base400}`};
        }

        &Active {
          background-color: ${(props: any): any => `${props.theme.colors.primary500}`};
          color: ${(props: any): any => `${props.theme.colors.base100}`};

          &:hover {
            background-color: ${(props: any): any => `${props.theme.colors.primary500}`};
            opacity: 0.9;
          }
        }

        &Ellipsis {
          cursor: text;

          &:hover {
            background-color: transparent;
          }
        }
      }
    }

    &Button {
      &RightText {
        margin-right: 12px;
      }

      &LeftText {
        margin-left: 12px;
      }

      &Icon {
        color: ${(props: any): any => props.theme.colors.base700};
        height: 16px;
        width: 16px;

        &NoMargin {
          margin: 0;
        }
      }

      &Disabled {
        opacity: 0.4;
        pointer-events: none;
      }
    }
  }
`;
