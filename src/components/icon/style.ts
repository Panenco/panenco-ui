import { styled } from 'linaria/react';

export const StyledSVG = styled.svg`
  &.svg {
    width: ${({ width }: any): string => width};
    height: ${({ height }: any): string => height};
  }

  [fill]:not([fill='none']):not([fill^='url(']) {
    fill: currentColor !important;
  }

  [stroke]:not([stroke='none']):not([stroke^='url(']) {
    stroke: currentColor !important;
  }

  &.disabled {
    opacity: 0.4;
    pointer-events: none;
  }
`;
