import { styled } from 'linaria/react';
// import { ThemeMode } from 'utils/types';

export const StyledLoader = styled.div`
  height: 20px;
  width: 20px;
  position: relative;

  &::after {
    animation: loader 1.2s infinite;
    border: 8px solid ${(props: any): string => props.theme.colors.accent500};
    border-color: ${(props: any): string => (props.color ? props.color : props.theme.colors.secondary)} transparent;
    border-radius: 50%;
    box-sizing: border-box;
    content: ' ';
    display: block;
    height: 0;
    margin: 2px;
    width: 0;
  }
  @keyframes loader {
    0% {
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      transform: rotate(0);
    }

    50% {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      transform: rotate(900deg);
    }

    100% {
      transform: rotate(1800deg);
    }
  }
`;
