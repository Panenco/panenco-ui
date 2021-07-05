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
  padding: 24px 24px 8px 24px;
  @media (max-width: ${breakpoints.sm}) {
    padding: 16px 16px 8px 16px;
  }
`;

export const StyledPopupBody = styled.div<{
  emptyHeader: boolean;
}>`
  padding: ${(props: any): string => (props.emptyHeader ? '24px' : '8px 24px 24px 24px')};
  @media (max-width: ${breakpoints.sm}) {
    flex: 1;
    overflow-x: hidden;
    overflow-y: auto;
    padding: ${(props: any): string => (props.emptyHeader ? '16px' : '8px 16px 16px 16px')};
  }
`;

export const StyledPopup = styled.div`
  background-clip: padding-box;
  background-color: ${(props: any): string => props.theme.colors.light};
  border-radius: 4px;
  border: 1px solid ${(props: any): string => props.theme.colors.border};
  display: flex;
  flex-direction: column;
  max-width: 460px;
  outline: 0;
  pointer-events: auto;
  position: relative;
  width: 100%;
  @media (max-width: ${breakpoints.sm}) {
    display: flex;
    flex-direction: column;
    height: auto;
    margin-top: auto;
    max-height: min(100%, 500px);
  }
`;

export const StyledPopupContainer = styled.div`
  align-items: flex-start;
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  outline: 0;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 100px 10px;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1060;
  @media (max-width: ${breakpoints.sm}) {
    padding: 0;
  }
`;
export const StyledPopupBackdrop = styled.div`
  background-color: ${(props: any): string => props.theme.colors.secondary};
  height: 100vh;
  left: 0;
  opacity: 0.15;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 1040;
`;
