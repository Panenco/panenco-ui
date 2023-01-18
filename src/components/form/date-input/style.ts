import styled from 'styled-components';
import { PUITheme } from 'utils/types';

export const StyledDayPicker = styled.div<{
  theme: PUITheme;
}>`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: transparent;

  .dateInputWrapper {
    display: flex;
  }

  .dateInputItem {
    display: flex;
    align-items: flex-end;

    &Divider {
      width: 5px;
      margin: 0 10px;
      line-height: 52px;
    }
  }

  &.error {
    .inputField {
      border-color: ${(props: any): string => {
        return props.theme.colors.error;
      }}
  }

  .title {
    margin-bottom: 4px;
    color: ${(props: any): string => props.theme.colors.base900};
  }

  .overlay {
    border: 1px solid ${(props: any): string => props.theme.colors.base700};
    margin-top: 10px;
    border-radius: 4px;
  }

  .footer {
    display: flex;
    align-items: flex-end;
    padding: 0 14px;
    margin-bottom: 18px;
  }

  .submitTime {
    min-width: 100px;
    margin-left: 10px;
  }

  .submitTime span {
    line-height: 20px;
  }

  .subtitle {
    margin-bottom: 4px;
    color: ${(props: any): string => props.theme.colors.base700};
  }

  .withErrorWrapper {
    display: flex;
    width: 100%;
    align-items: flex-start;

    &Content {
      width: 100%;
    }

    .input {
      width: inherit;
      min-height: 86px;
      padding: 6px 12px;
      border: 1px solid ${(props: any): string => props.theme.colors.base700};
      background-color: transparent;
      border-radius: 4px;
      color: ${(props: any): string => props.theme.colors.base900};
      font-size: ${(props: any): string => props.theme.typography.sizes.m.textSize};
      resize: none;

      &::placeholder {
        color: ${(props: any): string => props.theme.colors.base700};
      }

      &Error {
        border-color: transparent;
        box-shadow: 0 0 0 2px ${(props: any): string => props.theme.colors.error};
        color: ${(props: any): string => props.theme.colors.base900};

        &:hover {
          box-shadow: none;
        }
      }

      &Disabled {
          /* border-color: ${(props: any): string => props.theme.colors.base400}; */
        background-color: ${(props: any): string => props.theme.colors.base400};
        opacity: 0.4;
        pointer-events: none;
      }

      &:hover {
        border: 1px solid ${(props: any): string => props.theme.colors.primary500};
        color: ${(props: any): string => props.theme.colors.base900};
      }

      &:focus {
        border-color: transparent;
        box-shadow: 0 0 0 2px ${(props: any): string => props.theme.colors.base900};
        outline: 0;
      }
    }

    .counterWrapper {
      position: absolute;
      bottom: -15px;
      display: flex;
      width: 100%;
      justify-content: space-between;
      margin-top: 4px;
      font-size: ${(props: any): string => props.theme.typography.sizes.xs.textSize};

      .counter {
        color: ${(props: any): string => props.theme.colors.base700};
      }

      .errorLabel {
        color: ${(props: any): string => props.theme.colors.error};
      }

      .hidden {
        visibility: hidden;
      }
    }
  }
`;
