import { styled } from 'linaria/react';

export const StyledSVG = styled.svg`
  &.svg {
    width: ${(props: any): string => {
      if (props.width) {
        return typeof props.width === 'number' ? `${props.width}px` : props.width;
      }
      return typeof props.size === 'number' ? `${props.size}px` : props.size;
    }};
    height: ${(props: any): string => {
      if (props.height) {
        return typeof props.height === 'number' ? `${props.height}px` : props.height;
      }
      return typeof props.size === 'number' ? `${props.size}px` : props.size;
    }};
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
