import { styled } from 'linaria/react';

export const StyledSVG = styled.svg`
  &.svg {
    width: ${({ size, width }: any): number => size || width}px;
    height: ${({ size, height }: any): number => size || height}px;
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
