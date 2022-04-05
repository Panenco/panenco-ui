import { styled } from 'linaria/react';
import { transparentize } from 'polished';
import { ThemeMode, PUITheme } from 'utils/types';

export const StyledDayPicker = styled.div<{
  theme: PUITheme;
  mode: ThemeMode;
  error?: string;
}>`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: transparent;

  .title {
    color: ${(props: any): string =>
      props.mode === ThemeMode.dark ? props.theme.colors.base100 : props.theme.colors.base900};
  }

  .subtitle {
    color: ${(props: any): string => props.theme.colors.base700};
    margin-bottom: 4px;
  }

  .overlay {
    background: #fff;
    border: 1px solid ${(props: any): string => props.theme.colors.base700};
    border-radius: 4px;
    margin-top: 10px;
    max-width: 286px;
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

    .input {
      width: 100%;
    }

    .textInput, .DayPicker {
      width: 100%;

      .DayPicker-Month {
        width: 100%;
      }
    }
  }

  .footer {
    align-items: flex-end;
    display: flex;
    margin-bottom: 18px;
    padding: 0 14px;
    width: 100%;
  }

  .submitTime {
    margin-left: 10px;
    min-width: 100px;
  }

  .subtitle {
    color: ${(props: any): string => props.theme.colors.base700};
    margin-bottom: 4px;
  }

  .withErrorWrapper {
    display: flex;
    align-items: flex-start;
    width: 100%;

    &Content {
      width: 100%;
    }

    .input {
      resize: none;
      width: inherit;
      min-height: 86px;
      padding: 6px 12px;
      color: ${(props: any): string =>
        props.mode === ThemeMode.dark ? props.theme.colors.base100 : props.theme.colors.base900};
      border: 1px solid ${(props: any): string => props.theme.colors.base700};
      border-radius: 4px;
      font-size: ${(props: any): string => props.theme.typography.sizes.m.textSize};
      background-color: transparent;
      &::placeholder {
        color: ${(props: any): string => props.theme.colors.base700};
      }

      &Error {
        box-shadow: 0 0 0 2px ${(props: any): string => props.theme.colors.error};
        border-color: transparent;
        color: ${(props: any): string =>
          props.mode === ThemeMode.dark ? props.theme.colors.base100 : props.theme.colors.base900};

        &:hover {
          box-shadow: none;
        }
      }

      &Disabled {
        pointer-events: none;
        /* border-color: ${(props: any): string => props.theme.colors.base400}; */
        background-color: ${(props: any): string =>
          props.mode === ThemeMode.dark ? transparentize(0.4, props.theme.colors.base700) : props.theme.colors.base400};
        opacity: 0.4;
      }

      &:hover {
        border: 1px solid
          ${(props: any): string =>
            props.mode === ThemeMode.dark ? props.theme.colors.base100 : props.theme.colors.primary500};
        color: ${(props: any): string =>
          props.mode === ThemeMode.dark ? props.theme.colors.base700 : props.theme.colors.base900};
      }

      &:focus {
        outline: 0;
        border-color: transparent;
        box-shadow: 0 0 0 2px ${(props: any): string => props.theme.colors.base900};
      }
    }

    .counterWrapper {
      margin-top: 4px;
      display: flex;
      justify-content: space-between;
      font-size: ${(props: any): string => props.theme.typography.sizes.xs.textSize};
      position: absolute;
      bottom: -15px;
      width: 100%;

      .counter {
        color: ${(props: any): string => props.theme.colors.base700};
      }

      .errorLabel {
        color: ${(props: any): string =>
          props.mode === ThemeMode.dark ? props.theme.colors.base100 : props.theme.colors.error};
      }

      .hidden {
        visibility: hidden;
      }
    }
  }

    .DayPicker {
      display: inline-block;
      font-size: 1rem;
    }

    .DayPicker-wrapper {
      position: relative;

      flex-direction: row;
      padding-bottom: 1em;

      user-select: none;
    }

    .DayPicker-Months {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }

    .DayPicker-Month {
      display: table;
      margin: 0 1em;
      margin-top: 1em;
      border-spacing: 0;
      border-collapse: collapse;

      user-select: none;
    }

    .DayPicker-NavButton {
      position: absolute;
      top: 1em;
      right: 1.5em;
      left: auto;

      display: inline-block;
      margin-top: 4px;
      width: 1.25em;
      height: 1.25em;
      background-position: center;
      background-size: 50%;
      background-repeat: no-repeat;
      color: #8b9898;
      cursor: pointer;
    }

    .DayPicker-NavButton:hover {
      opacity: 0.8;
    }

    .DayPicker-NavButton--prev {
      background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTYgMTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDYyICg5MTM5MCkgLSBodHRwczovL3NrZXRjaC5jb20gLS0+CiAgICA8dGl0bGU+aWNvbiAvIG0gLyBjaGV2cm9uIGxlZnQ8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0iaWNvbi0vLW0tLy1jaGV2cm9uLWxlZnQiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUiIHg9IjAiIHk9IjAiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PC9yZWN0PgogICAgICAgIDxwYXRoIGQ9Ik0xMS4zNzE0NjA2LDAuMjYwMzQ5NTI4IEMxMS43MTg1OTMzLC0wLjA4Njc4MzE3NTkgMTIuMjgxNDA2NywtMC4wODY3ODMxNzU5IDEyLjYyODUzOTQsMC4yNjAzNDk1MjggQzEyLjk0ODk2OTUsMC41ODA3Nzk3MTYgMTIuOTczNjE4LDEuMDg0OTg1MSAxMi43MDI0ODQ4LDEuNDMzNjg4MzkgTDEyLjYyODUzOTQsMS41MTc0MjgyNSBMNi4xNDY2NjY2Nyw4IEwxMi42Mjg1Mzk0LDE0LjQ4MjU3MTggQzEyLjk0ODk2OTUsMTQuODAzMDAxOSAxMi45NzM2MTgsMTUuMzA3MjA3MyAxMi43MDI0ODQ4LDE1LjY1NTkxMDYgTDEyLjYyODUzOTQsMTUuNzM5NjUwNSBDMTIuMzA4MTA5MiwxNi4wNjAwODA3IDExLjgwMzkwMzgsMTYuMDg0NzI5MSAxMS40NTUyMDA1LDE1LjgxMzU5NTkgTDExLjM3MTQ2MDYsMTUuNzM5NjUwNSBMNC4yNjAzNDk1Myw4LjYyODUzOTM2IEMzLjkzOTkxOTM0LDguMzA4MTA5MTcgMy45MTUyNzA4Niw3LjgwMzkwMzc5IDQuMTg2NDA0MSw3LjQ1NTIwMDQ5IEw0LjI2MDM0OTUzLDcuMzcxNDYwNjQgTDExLjM3MTQ2MDYsMC4yNjAzNDk1MjggWiIgaWQ9IlBhdGgiIGZpbGw9IiM5MEE0QUUiPjwvcGF0aD4KICAgIDwvZz4KPC9zdmc+');
      background-size: auto;
      height: 16px;
      margin-right: 2.5em;
    }

    .DayPicker-NavButton--next {
      background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTYgMTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDYyICg5MTM5MCkgLSBodHRwczovL3NrZXRjaC5jb20gLS0+CiAgICA8dGl0bGU+aWNvbiAvIG0gLyBjaGV2cm9uIHJpZ2h0PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9Imljb24tLy1tLS8tY2hldnJvbi1yaWdodCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgeD0iMCIgeT0iMCIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2Ij48L3JlY3Q+CiAgICAgICAgPHBhdGggZD0iTTQuMjYwMzQ5NTMsMC4yNjAzNDk1MjggQzQuNTgwNzc5NzIsLTAuMDYwMDgwNjYwMyA1LjA4NDk4NTEsLTAuMDg0NzI5MTM2MyA1LjQzMzY4ODM5LDAuMTg2NDA0MSBMNS41MTc0MjgyNSwwLjI2MDM0OTUyOCBMMTIuNjI4NTM5NCw3LjM3MTQ2MDY0IEMxMi45NDg5Njk1LDcuNjkxODkwODMgMTIuOTczNjE4LDguMTk2MDk2MjEgMTIuNzAyNDg0OCw4LjU0NDc5OTUxIEwxMi42Mjg1Mzk0LDguNjI4NTM5MzYgTDUuNTE3NDI4MjUsMTUuNzM5NjUwNSBDNS4xNzAyOTU1NSwxNi4wODY3ODMyIDQuNjA3NDgyMjMsMTYuMDg2NzgzMiA0LjI2MDM0OTUzLDE1LjczOTY1MDUgQzMuOTM5OTE5MzQsMTUuNDE5MjIwMyAzLjkxNTI3MDg2LDE0LjkxNTAxNDkgNC4xODY0MDQxLDE0LjU2NjMxMTYgTDQuMjYwMzQ5NTMsMTQuNDgyNTcxOCBMMTAuNzQyMjIyMiw4IEw0LjI2MDM0OTUzLDEuNTE3NDI4MjUgQzMuOTM5OTE5MzQsMS4xOTY5OTgwNiAzLjkxNTI3MDg2LDAuNjkyNzkyNjc5IDQuMTg2NDA0MSwwLjM0NDA4OTM4NCBMNC4yNjAzNDk1MywwLjI2MDM0OTUyOCBaIiBpZD0iUGF0aCIgZmlsbD0iIzkwQTRBRSI+PC9wYXRoPgogICAgPC9nPgo8L3N2Zz4=');
      background-size: auto;
      height: 16px;
    }

    .DayPicker-NavButton--interactionDisabled {
      display: none;
    }

    .DayPicker-Caption {
      display: table-caption;
      margin-bottom: 0.5em;
      padding: 0 0.5em;
      text-align: left;
    }

    .DayPicker-Caption > div {
      font-weight: 500;
      font-size: 1.25em;
    }

    .DayPicker-Weekdays {
      display: table-header-group;
      margin-top: 1em;
    }

    .DayPicker-WeekdaysRow {
      display: table-row;
    }

    .DayPicker-Weekday {
      display: table-cell;
      padding: 0.5em;
      color: #8b9898;
      text-align: center;
      font-size: 1em;
    }

    .DayPicker-Weekday abbr[title] {
      border-bottom: none;
      text-decoration: none;
    }

    .DayPicker-Body {
      display: table-row-group;
    }

    .DayPicker-Week {
      display: table-row;
    }

    .DayPicker-Day {
      display: table-cell;
      padding: 0.5em;
      border-radius: 3px;
      vertical-align: middle;
      text-align: center;
      cursor: pointer;
    }

    .DayPicker-WeekNumber {
      display: table-cell;
      padding: 0.5em;
      min-width: 1em;
      border-right: 1px solid #eaecec;
      color: #8b9898;
      vertical-align: middle;
      text-align: right;
      font-size: 0.75em;
      cursor: pointer;
    }

    .DayPicker--interactionDisabled .DayPicker-Day {
      cursor: default;
    }

    .DayPicker-Footer {
      padding-top: 0.5em;
    }

    .DayPicker-TodayButton {
      border: none;
      background-color: transparent;
      background-image: none;
      box-shadow: none;
      color: #4a90e2;
      font-size: 0.875em;
      cursor: pointer;
    }

    /* Default modifiers */

    .DayPicker-Day--today {
      color: unset;
      font-weight: 700;
    }

    .DayPicker-Day--outside {
      color: #8b9898;
      cursor: default;
    }

    .DayPicker-Day--disabled {
      color: #dce0e0;
      cursor: default;
      /* background-color: #eff1f1; */
    }

    /* Example modifiers */

    .DayPicker-Day--sunday {
      background-color: #f7f8f8;
    }

    .DayPicker-Day--sunday:not(.DayPicker-Day--today) {
      color: #dce0e0;
    }

    .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside) {
      background-color: ${(props: any): string => props.theme.colors.primary500};
      color: #fff;
      position: relative;
    }

    .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside):hover {
      background-color: ${(props: any): string => props.theme.colors.primary700};
    }

    .DayPicker:not(.DayPicker--interactionDisabled)
      .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
      background-color: ${(props: any): string => props.theme.colors.primary700};
      color: #fff;
    }

    /* DayPickerInput */

    .DayPickerInput {
      display: inline-block;
    }

    .DayPickerInput-OverlayWrapper {
      position: relative;
    }

    .DayPickerInput-Overlay {
      position: absolute;
      left: 0;
      z-index: 1;

      background: white;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
    }

    .input {
      cursor: pointer;
    }
  }
`;
