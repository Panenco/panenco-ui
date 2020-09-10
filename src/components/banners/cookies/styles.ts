import { styled } from 'linaria/react';
import { transparentize } from 'polished';
import { ThemeMode } from '../../../utils/types';

export const StyledCookiesContainer = styled.div`
  align-items: center;
  background-color: ${(props: any): string => {
    return transparentize(0.4, props.mode === ThemeMode.dark ? props.theme.colors.light : props.theme.colors.dark);
  }};
  display: flex;
  height: 100%;
  justify-content: center;
  position: fixed;
  width: 100%;

  .cookiesModalPaper {
    max-width: 50%;
    min-width: 300px;
  }

  .cookiesModalActions {
    align-items: flex-end;
    display: flex;
    margin-top: 24px;

    & > button:first-child {
      margin-right: 24px;
    }
  }

  .cookiesModalShortDescription {
    &Text {
      color: ${(props: any) => (props.mode === ThemeMode.dark ? props.theme.colors.light : props.theme.colors.primary)};
    }
  }

  .cookiesModalDetailedViewButton {
    background: none;
    border: none;
    cursor: pointer;
    margin: 0;
    margin-left: auto;
    padding: 0;

    &Text {
      color: ${(props: any) =>
        props.mode === ThemeMode.dark ? props.theme.colors.light : props.theme.colors.accent500};
    }
  }
`;

export const StyledCookieEntry = styled.div`
  margin-bottom: 24px;

  .cookieEntryTitle {
    margin-bottom: 8px;

    &Text {
      color: ${(props: any) => (props.mode === ThemeMode.dark ? props.theme.colors.light : props.theme.colors.primary)};
    }
  }

  .cookieEntryDescription {
    margin-bottom: 12px;

    &Text {
      color: ${(props: any) => (props.mode === ThemeMode.dark ? props.theme.colors.light : props.theme.colors.primary)};
    }
  }

  .cookieEntryRadio {
    display: flex;

    & > * {
      margin-right: 24px;
    }
  }
`;
