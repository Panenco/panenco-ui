import { styled } from 'linaria/react';
// import { transparentize } from 'polished';
import { ThemeMode } from '../../../utils/types';
import { Paper } from '../../paper';

export const StyledIosInstallPaper = styled(Paper)`
  left: 50%;
  max-width: 50%;
  min-width: 300px;
  position: fixed;
  text-align: center;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 0;

  .installModalActions {
    align-items: flex-end;
    display: flex;
    justify-content: flex-end;
  }

  .installModalContent {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .installModalIcon {
    background: ${(props: any) =>
      props.mode === ThemeMode.dark ? props.theme.colors.light : props.theme.colors.secondary};
    border-radius: 10px;
    flex-grow: 0;
    flex-shrink: 0;
    height: 70px;
    margin-bottom: 16px;
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
