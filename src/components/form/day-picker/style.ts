import { styled } from 'linaria/react';
import { ThemeMode, PUITheme } from 'utils/types';

export const StyledDayPicker = styled.div<{
  theme: PUITheme;
  mode: ThemeMode;
  error?: string;
}>`
  .dayPickerWrapper {
    display: flex;
    flex-direction: column;
    background-color: transparent;
  }

  .calendar-wrapper {
    position: relative
  }

  .calendar {
    background: #fff;
    border: 1px solid ${(props: any): string => props.theme.colors.base700};
    border-radius: 4px;
    margin-top: 10px;
    position: absolute;
    z-index: 10;
  }

  .bottom-end {
    right: 0;
  }

  .mobile {
    max-width: 100vw;
    width: 100vw;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: calc(-50vw + 50%);
    margin-right: calc(-50vw + 50%);

    .rdp {
      width: 100%;

      .rdp-month {
        width: 100%;

        .rdp-table {
          max-width: 100%;
          width: 100%;

          .rdp-day {
            margin: 0 auto;
          }
        }
      }
    }


    .rdp-caption {
      padding: 0 15px;
    }

    .footer {
      padding: 0 15px;
    }
  }

  .rdp-caption_label {
    font-size: ${(props: any): string => props.theme.typography.sizes.l.textSize};
    line-height: ${(props: any): string => props.theme.typography.sizes.l.lineHeight};
    font-weight: ${(props: any): string => props.theme.typography.weights.regular};
  }

  .rdp-nav_button {
    svg {
      color: ${(props: any): string => props.theme.colors.base700};
    }
  }

  .rdp-nav_button_next:hover, .rdp-nav_button_previous:hover {
    background: none;
  }

  .rdp-button:focus:not([disabled]), .rdp-button:active:not([disabled]) {
    border-radius: 4px;
    border: none;
    background: ${(props: any): string => props.theme.colors.primary200};
  }

  .rdp-day:hover {
    background: ${(props: any): string => props.theme.colors.primary700};
    color: ${(props: any): string => props.theme.colors.base100};
    border-radius: 4px;
  }

  .rdp-day_selected {
    background: ${(props: any): string => props.theme.colors.primary500};
    border-radius: 4px;
    border: none;
  }

  .rdp-day_selected:not([disabled]), .rdp-day_selected:focus:not([disabled]), .rdp-day_selected:active:not([disabled]), .rdp-day_selected:hover:not([disabled]){
    background: ${(props: any): string => props.theme.colors.primary500};
    border-radius: 4px;
    border: none;
  }

  .footer {
    display: flex;
    gap: 12px;
    align-items: flex-end;
    width: 100%;
    justify-content: center;

    .submitTime {
      min-width: fit-content;
      border: 3px solid transparent;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    .timeInput {
      width: 100%;
    }
  }
`;