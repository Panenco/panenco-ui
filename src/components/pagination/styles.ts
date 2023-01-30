import styled from 'styled-components';

export const StyledPagination = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 32px;

  .pagination {
    &Select {
      margin: 0 10px;
      height: 48px;
      width: 80px;
    }

    &Button {
      align-items: center;
      padding: 0 5px;
      border: 1px solid transparent;
      display: flex;
      height: 32px;
      min-height: 32px;
      justify-content: center;
      text-decoration: none;
      width: 32px;
      border-bottom: none;
      background-color: transparent;
      cursor: pointer;

      &:hover {
        border-bottom: none;
        background-color: ${({ theme }): any => theme.colors.primary200};

        .paginationButtonIcon {
          color: ${({ theme }: any): any => theme.colors.primary500};
        }
      }

      &:focus {
        border-bottom: none;
      }

      &Icon {
        color: ${({ theme }: any): any => theme.colors.base700};
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

    &Text {
      margin: 0 10px;
      color: ${({ theme }: any) => theme.colors.base700};
    }

    &Section {
      align-items: center;
      display: flex;
    }

    &Divider {
      background: ${({ theme }: any): any => `${theme.colors.base700}`};
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

export const StyledListPagination = styled.nav<{
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
        margin-left: 8px;
        color: ${({ theme }: any): any => `${theme.colors.base900}`};
        min-height: auto;
        font-weight: 400;
        background-color: transparent;
        font-size: 16px;
        cursor: pointer;

        &:hover:not(.paginationListItemActive, .paginationListItemEllipsis) {
          background-color: ${({ theme }: any): any => `${theme.colors.primary200}`};
          color: ${({ theme }: any): any => `${theme.colors.primary500}`};

          .paginationButtonIcon {
            color: ${({ theme }: any): any => theme.colors.primary500};
          }
        }

        &Active {
          background-color: ${({ theme }: any): any => `${theme.colors.base900}`};
          color: ${({ theme }: any): any => `${theme.colors.base100}`};

          &:hover {
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
        color: ${({ theme }: any): any => theme.colors.base700};
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
