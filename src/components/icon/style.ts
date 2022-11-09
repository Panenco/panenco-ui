import styled from 'styled-components';

export const StyledSVG = styled.svg`
  color: red;
  &.svg {
    fill: red;

    width: ${({ width }: any): string => width};
    height: ${({ height }: any): string => height};
    stroke-width: ${({ strokeWidth }: any): string => strokeWidth};
  }

  [fill]:not([fill='none']):not([fill^='url(']) {
    fill: red;
  }

  [stroke]:not([stroke='none']):not([stroke^='url(']) {
    stroke: red;
  }

  &.disabled {
    opacity: 0.4;
    pointer-events: none;
  }
`;
