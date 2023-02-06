import styled from 'styled-components';

export const StyledSVG = styled.svg`
  &.svg {
    width: ${({ width }: any): string => width};
    height: ${({ height }: any): string => height};
    stroke-width: ${({ strokeWidth }: any): string => strokeWidth};
  }

  &.disabled {
    opacity: 0.4;
    pointer-events: none;
  }
`;
