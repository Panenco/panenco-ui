import { styled } from 'linaria/react';
// import { transparentize } from 'polished';
import { ThemeMode } from '../../../utils/types';
import { Paper } from '../../paper';

export const StyledAndroidInstallPaper = styled(Paper)`
  bottom: 0;
  position: fixed;
  width: 100%;

  .installModalPaper {
    max-width: 50%;
    min-width: 300px;
  }

  .installModalActions {
    align-items: flex-end;
    display: flex;
    justify-content: flex-end;
  }

  .installModalGroup {
    align-items: center;
    display: flex;
  }

  .installModalIcon {
    background: ${(props: any) =>
      props.mode === ThemeMode.dark ? props.theme.colors.light : props.theme.colors.secondary};
    border-radius: 50%;
    flex-grow: 0;
    flex-shrink: 0;
    height: 70px;
    margin-right: 16px;
    object-fit: cover;
    overflow: hidden;
    width: 70px;

    &Img {
      width: 100%;
    }
  }

  .installModalTitle {
    margin-bottom: 4px;

    &Text {
      color: ${(props: any) => (props.mode === ThemeMode.dark ? props.theme.colors.light : props.theme.colors.primary)};
    }
  }

  .installModalDescription {
    &Text {
      color: ${(props: any) => (props.mode === ThemeMode.dark ? props.theme.colors.light : props.theme.colors.primary)};
    }
  }
`;
