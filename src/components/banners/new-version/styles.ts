import { styled } from 'linaria/react';
// import { transparentize } from 'polished';
import { ThemeMode } from '../../../utils/types';
import { Paper } from '../../paper';

export const StyledNewVersionPaper = styled(Paper)`
  bottom: 0;
  position: fixed;
  width: 100%;

  .newVersionModalPaper {
    max-width: 50%;
    min-width: 300px;
  }

  .newVersionModalActions {
    align-items: flex-end;
    display: flex;
    justify-content: flex-end;
    margin-top: 24px;

    & > button:first-child {
      margin-right: 24px;
    }
  }

  .newVersionModalTitle {
    margin-bottom: 8px;

    &Text {
      color: ${(props: any) => (props.mode === ThemeMode.dark ? props.theme.colors.light : props.theme.colors.primary)};
    }
  }

  .newVersionModalDescription {
    &Text {
      color: ${(props: any) => (props.mode === ThemeMode.dark ? props.theme.colors.light : props.theme.colors.primary)};
    }
  }
`;
