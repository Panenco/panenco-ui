import { styled } from 'linaria/react';
import { ThemeMode } from 'utils/types';

export const StyledPagination = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  .pagination {
    &Text {
      margin: 0 4px 0 20px;

      &BerforeSelect {
        margin-right: 5px;
      }
    }

    &Select {
      margin-left: 5px;
      width: 110px;
    }

    &Button {
      align-items: center;
      border: 1px solid transparent;
      display: flex;
      height: 36px;
      justify-content: center;
      text-decoration: none;
      width: 36px;
      border-bottom: none;

      &:hover {
        border-bottom: none;
      }

      &:focus {
        border-bottom: none;
      }

      &Icon {
        color: ${(props: any): any =>
          props.mode === ThemeMode.dark ? props.theme.colors.secondary : props.theme.colors.secondary};
        height: 16px;
        width: 16px;
      }

      &Disabled {
        opacity: 0.4;
        pointer-events: none;
      }
    }
  }
`;
