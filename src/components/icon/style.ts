import styled from 'styled-components';

export const StyledSVG = styled.svg<{
  height?: number | string;
  strokeWidth?: number | string;
  width?: number | string;
}>`
  &.svg {
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    stroke-width: ${({ strokeWidth }) => strokeWidth};
  }

  &.disabled {
    opacity: 0.4;
    pointer-events: none;
  }
`;
