import { styled } from 'linaria/react';

export const StyledSVG = styled.svg`
  width: ${(props: any): string => (props.width ? `${props.width}px` : `16px`)};
  height: ${(props: any): string => (props.height ? `${props.height}px` : `16px`)};

  [fill]:not([fill='none']):not([fill^='url(']) {
    fill: currentColor !important;
  }

  [stroke]:not([stroke='none']):not([stroke^='url(']) {
    stroke: currentColor !important;
  }

  &.disabled {
    pointer-events: none;
  }
`;
