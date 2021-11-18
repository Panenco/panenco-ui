import { styled } from 'linaria/react';
import { transparentize } from 'polished';
import { PUITheme, ThemeMode } from '../../../utils/types';

export const StyledUnsupportedContainer = styled.div<{
  theme: PUITheme;
  mode: ThemeMode;
}>`
  align-items: center;
  background-color: ${(props: any): string => {
    return transparentize(0.4, props.mode === ThemeMode.dark ? props.theme.colors.base100 : props.theme.colors.base900);
  }};
  display: flex;
  height: 100%;
  justify-content: center;
  position: fixed;
  width: 100%;

  .unsupportedModalPaper {
    max-width: 50%;
    min-width: 300px;
  }

  .unsupportedModalActions {
    align-items: flex-end;
    display: flex;
    margin-top: 24px;
  }

  .unsupportedModalTitle {
    margin-bottom: 8px;

    &Text {
      color: ${(props: any) =>
        props.mode === ThemeMode.dark ? props.theme.colors.base100 : props.theme.colors.base900};
    }
  }

  .unsupportedModalDescription {
    &Text {
      color: ${(props: any) =>
        props.mode === ThemeMode.dark ? props.theme.colors.base100 : props.theme.colors.base900};
    }
  }
`;
