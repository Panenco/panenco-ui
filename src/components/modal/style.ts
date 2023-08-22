import styled, { css } from 'styled-components';
import { breakpoints } from 'styles/breakpoints';
import FocusLock from 'react-focus-lock';
import { ModalScrollType, ModalSizesType } from './types';

const sizeOptions = {
  sm: '320px',
  md: '460px',
  lg: '798px',
};

export const StyledFocusLock = styled(FocusLock)`
  overflow-x: hidden;
  overflow-y: auto;
  left: 0;
  bottom: 0;
  right: 0;
  top: 0;
  position: fixed;
  z-index: 1060;
`;

export const StyledModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid ${(props: any): string => props.theme.colors.base300};
  @media (min-width: ${breakpoints.sm}) {
    padding: 16px 24px;
  }
`;

export const StyledModalFooter = styled.div`
  padding: 16px 24px;
  border-top: 1px solid ${(props: any): string => props.theme.colors.base300};
  @media (max-width: ${breakpoints.sm}) {
    padding: 16px;
  }
`;

export const StyledModalBody = styled.div`
  padding: 16px 24px;
  @media (max-width: ${breakpoints.sm}) {
    padding: 16px;
  }
`;

export const StyledModal = styled.div<{
  size: ModalSizesType;
}>`
  background-clip: padding-box;
  background-color: ${(props: any): string => props.theme.colors.base100};
  border-radius: 4px;
  border: 1px solid ${(props: any): string => props.theme.colors.base400};
  display: flex;
  flex-direction: column;
  width: 100%;
  outline: 0;
  pointer-events: auto;
  position: relative;
  margin-top: auto;
  @media (min-width: ${breakpoints.sm}) {
    height: auto;
    margin-top: 0;
    max-width: ${(props: any): string => sizeOptions[props.size] || sizeOptions.md};
  }
`;

export const StyledModalContainer = styled.div<{
  scroll: ModalScrollType;
}>`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 0;
  min-height: 100%;
  ${({ scroll }) =>
    scroll === 'paper' &&
    css`
      height: 100%;

      ${StyledModal} {
        max-height: 100%;
        overflow-y: auto;
        overflow-x: hidden;
      }

      ${StyledModalBody} {
        overflow-y: auto;
        overflow-x: hidden;
      }
    `}

  @media (min-width: ${breakpoints.sm}) {
    padding: 100px 10px;
  }
`;

export const StyledModalBackdrop = styled.div`
  background-color: ${(props): string => props.theme.colors.base700};
  height: 100vh;
  left: 0;
  opacity: 0.15;
  position: fixed;
  top: 0;
  width: 100vw;
`;
