import styled from 'styled-components';
import { PUITheme } from 'utils/types';

export const StyledRootSlider = styled.div`
  position: relative;
  width: 100%;

  & .disabled {
    pointer-events: none;
    opacity: 0.4;
    cursor: default;
  }
`;

export const StyledHandle = styled.div<{
  theme: PUITheme;
}>`
  align-items: center;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  height: 32px;
  justify-content: center;
  min-width: 48px;
  padding: 10px;
  position: absolute;
  z-index: 2;
  background-color: ${(props: any): string => {
    if (props.isActive) {
      return props.theme.colors.primary700;
    }
    return props.theme.colors.primary500;
  }};

  left: ${(props: any): string => {
    return `${props.percent}%`;
  }};
  transform: ${(props: any): string => `translate(-${props.percent}%, -100%) `};
  top: ${(props: any): string => (props.isActive ? '-3px' : 'auto')};

  &:hover {
    background-color: ${(props: any): string => props.theme.colors.primary700};
  }

  & .valueLabel {
    z-index: 3;
    color: ${(props: any): string => props.theme.colors.base100};
  }
`;

export const StyledInputRange = styled.div<{
  theme: PUITheme;
}>`
  height: 32px;
  position: relative;
  width: 100%;

  & .rail {
    background-color: transparent;
    border: 1px solid ${(props: any): string => props.theme.colors.base700};
    z-index: 2;
    border-radius: 4px;
    cursor: pointer;
    height: 100%;
    position: absolute;
    width: 100%;
  }
`;

export const StyledTrack = styled.div<{
  theme: PUITheme;
}>`
  border-radius: 4px;
  cursor: pointer;
  height: 32px;
  position: absolute;
  transform: translate(0, -99%);
  z-index: 1;
  background-color: ${(props: any): string => props.theme.colors.primary200};
`;
