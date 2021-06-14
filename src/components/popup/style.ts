import { styled } from 'linaria/react';
import { breakpoints } from 'styles/breakpoints';

export const StyledPopupTitle = styled.div`
  margin-right: 16px;
`;

export const StyledPopupHeaderTitleRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledPopupHeader = styled.div`
  padding: 24px 24px 16px 24px;
  @media (max-width: ${breakpoints.s}) {
    padding: 16px;
  }
`;

export const StyledPopupBody = styled.div`
  padding: 0 24px 24px 24px;
  @media (max-width: ${breakpoints.s}) {
    padding: 0 16px 16px 16px;
    overflow-x: hidden;
    overflow-y: auto;
    flex: 1;
  }
`;

export const StyledPopup = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 460px;
  pointer-events: auto;
  background-color: ${(props: any): string => props.theme.colors.light};
  background-clip: padding-box;
  border: 1px solid ${(props: any): string => props.theme.colors.secondary};
  border-radius: 4px;
  outline: 0;
  @media (max-width: ${breakpoints.s}) {
    max-height: min(100%, 500px);
    margin-top: auto;
    display: flex;
    flex-direction: column;
    height: auto;
  }
`;

export const StyledPopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1060;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 100px 10px;
  @media (max-width: ${breakpoints.s}) {
    padding: 0;
  }
`;
export const StyledPopupBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  opacity: 0.5;
`;
