import { PUITheme } from 'utils/types';
import { styled } from 'linaria/react';
import { breakpoints } from 'styles/breakpoints';
import { PopupSizesType } from './types';

const sizeOptions = {
  sm: '300px',
  md: '460px',
  lg: '798px',
};

export const StyledPopupHeader = styled.div<{
  theme: PUITheme;
}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  border-bottom: 1px solid ${(props: any): string => props.theme.colors.border};
  @media (max-width: ${breakpoints.sm}) {
    padding: 16px;
  }
`;

export const StyledPopupFooter = styled.div<{
  theme: PUITheme;
}>`
  padding: 16px 24px;
  border-top: 1px solid ${(props: any): string => props.theme.colors.border};
  @media (max-width: ${breakpoints.sm}) {
    padding: 16px;
  }
`;

export const StyledPopupBody = styled.div<{
  emptyHeader: boolean;
}>`
  padding: 16px 24px;
  @media (max-width: ${breakpoints.sm}) {
    padding: 16px;
  }
`;

export const StyledPopup = styled.div<{
  theme: PUITheme;
  size: PopupSizesType;
}>`
  background-clip: padding-box;
  background-color: ${(props: any): string => props.theme.colors.light};
  border-radius: 4px;
  border: 1px solid ${(props: any): string => props.theme.colors.border};
  display: flex;
  flex-direction: column;
  width: ${(props: any): string => (sizeOptions[props.size] ? sizeOptions[props.size] : sizeOptions.md)};
  outline: 0;
  pointer-events: auto;
  position: relative;
  @media (max-width: ${breakpoints.sm}) {
    display: flex;
    flex-direction: column;
    height: auto;
    margin-top: auto;
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
export const StyledPopupBackdrop = styled.div<{
  theme: PUITheme;
}>`
  background-color: ${(props: any): string => props.theme.colors.secondary};
  height: 100vh;
  left: 0;
  opacity: 0.15;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 1040;
`;
