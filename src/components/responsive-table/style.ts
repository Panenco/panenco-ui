import { styled } from 'linaria/react';
import { transparentize } from 'polished';
import { ThemeMode, PUITheme } from 'utils/types';

const getBackgroundColor = (mode: ThemeMode, darkColor: string, lightColor: string, backgroundColor?: string ): string => {
  if (backgroundColor) return backgroundColor;
  if (mode === ThemeMode.dark) return darkColor;
  return lightColor;
};

export const Styles = styled.div<{
  theme: PUITheme;
  mode: ThemeMode;
  headerColor?: string;
  rowsColor?: string;
}>`
  width: 100%;
  .table {
    border-spacing: 0;
    width: 100%;

    &Cell {
      color: ${(props: any): string =>
    props.mode === ThemeMode.light ? props.theme.colors.base900 : props.theme.colors.base100};
      line-height: 1.3;
      min-height: 24px;
      overflow: hidden;
      padding: 12px 24px;
      text-align: left;
      text-overflow: ellipsis;
      white-space: nowrap;
      
      
      &:not(:first-child) {
        padding-left: 0;
      }

      &ButtonIcon {
        display: flex;
        flex-shrink: 0;
        margin-right: 12px;
      }

      &Wrap {
        display: flex;
        align-items: center;

        &Content {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }

    &Header {
      &Cell {
       background-color: ${({ mode, theme: { colors }, headerColor }: any): string => getBackgroundColor(mode, colors.base900, colors.base100, headerColor)}
    }

      &Button {
        background: transparent;
        border: none;
        cursor: pointer;
        display: flex;

        &Disabled {
          cursor: auto;
        }
      }

      &Content {
        display: flex;
        flex-direction: column;
        margin-left: 4px;
      }

      &Text {
        color: ${(props: any): string =>
          props.mode === ThemeMode.light ? props.theme.colors.base900 : props.theme.colors.base100};
        font-weight: ${(props: any): string => props.theme.typography.weights.bold};
      }

      &Text:hover {
        color: ${(props: any): string => props.theme.colors.primary500};
      }

      &Icon {
        color: ${(props: any): string => props.theme.colors.base700};
        cursor: pointer;
        height: 10px;
        width: 10px;

        &Active {
          color: ${(props: any): string => props.theme.colors.primary500};
        }
      }
    }

    &Body {
      &Row {
        position: relative;
        vertical-align: center;
      }
    }

    &Hidden {
      &Cell {
        padding: 12px 24px 12px 48px;

        &Content {
          display: flex;
          flex-direction: column;

          &:not(:last-child) {
            margin-bottom: 12px;
          }

          &Label {
            color: ${(props: any): string =>
              props.mode === ThemeMode.light ? props.theme.colors.base900 : props.theme.colors.base100};
            font-weight: ${(props: any): string => props.theme.typography.weights.bold};
            line-height: 14px;
          }

          &Text {
            color: ${(props: any): string =>
              props.mode === ThemeMode.light ? props.theme.colors.base900 : props.theme.colors.base100};
            line-height: 20px;
            margin-top: 4px;
          }
        }
      }
    }
  }



  .tableBodyRowStriped:nth-of-type(4n + 1) {
    background-color: ${(props: any): string =>
      transparentize(0.6, props.mode === ThemeMode.light ? props.theme.colors.base400 : props.theme.colors.base700)};
  }

  .tableBodyRowStriped:nth-of-type(4n + 2) {
    background-color: ${(props: any): string =>
      transparentize(0.6, props.mode === ThemeMode.light ? props.theme.colors.base400 : props.theme.colors.base700)};
  }

    .tableBodyRowBase {
    background-color: ${(props: any): string =>
      transparentize(0.6, props.rowsColor)};
  }


  @keyframes AnimationName {
    0% {
      background-position: 24% 0%;
    }
    50% {
      background-position: 50% 100%;
    }
    100% {
      background-position: 24% 0%;
    }
  }

  .fillerWrapper {
    animation: AnimationName 1s ease infinite;

    background: linear-gradient(
      90deg,
      ${(props: any): string =>
        props.mode === ThemeMode.light ? props.theme.colors.base100 : props.theme.colors.base900},
      ${(props: any): string =>
        props.mode === ThemeMode.light ? props.theme.colors.base400 : transparentize(0.6, props.theme.colors.base700)},
      ${(props: any): string =>
        props.mode === ThemeMode.light ? props.theme.colors.base100 : props.theme.colors.base900}
    );
    background-size: 200% 200%;

    height: 20px;
    width: 100%;
  }
`;
