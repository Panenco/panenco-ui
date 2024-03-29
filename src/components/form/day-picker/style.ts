import styled from 'styled-components';

export const StyledDayPicker = styled.div<{
  error?: string;
}>`
  .dayPickerWrapper {
    display: flex;
    flex-direction: column;
    background-color: transparent;
  }

  .calendar-wrapper {
    position: relative;
  }

  .calendar {
    background: #fff;
    border: 1px solid ${({ theme }) => theme.colors.base700};
    border-radius: 4px;
    margin-top: 10px;
    position: absolute;
    z-index: 10;
  }

  .bottom-end {
    right: 0;
  }

  .rdp-head_cell {
    background-color: ${({ theme }) => theme.colors.base100};
    border: 1px solid ${({ theme }) => theme.colors.base100};
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
    font-size: ${({ theme }) => theme.typography.sizes.l.textSize};
    line-height: ${({ theme }) => theme.typography.sizes.l.lineHeight};
    font-weight: ${({ theme }) => theme.typography.weights.regular};
  }

  .rdp-nav_button {
    svg {
      color: ${({ theme }) => theme.colors.base700};
    }
  }

  .rdp-nav_button_next:hover,
  .rdp-nav_button_previous:hover {
    background: none;
  }

  .rdp-button:focus:not([disabled]),
  .rdp-button:active:not([disabled]) {
    border-radius: 4px;
    border: none;
    background: ${({ theme }) => theme.colors.primary200};
  }

  .rdp-day:hover:not([disabled]) {
    background: ${({ theme }) => theme.colors.primary200};
    border-radius: 4px;
  }

  .rdp-day_selected:not([disabled]),
  .rdp-day_selected:focus:not([disabled]),
  .rdp-day_selected:active:not([disabled]),
  .rdp-day_selected:hover:not([disabled]) {
    background: ${({ theme }) => theme.colors.primary700};
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
