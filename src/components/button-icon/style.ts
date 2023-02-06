import styled from 'styled-components';

const convertToPixels = (size) => size && size.toString().concat('px');

export const StyledButtonIcon = styled.button<{
  size?: number;
  to?: string;
}>`
  align-items: center;
  background-color: transparent;
  border: 1px solid transparent;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  outline: none;
  padding: 0;
  display: flex;
  justify-content: center;

  &:hover,
  &:active {
    & .iconClass,
    & .buttonIconTitle {
      color: ${({ theme }) => theme.colors.primary700};
    }
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.base900};
  }

  & .iconClass {
    color: ${({ color, theme }) => color || theme.colors.base700};
    display: flex;
    flex-shrink: 0;
    transition: 0.3s;
    height: ${({ size, theme }) => convertToPixels(size) || theme.typography.sizes.m.textSize};
    width: ${({ size, theme }) => convertToPixels(size) || theme.typography.sizes.m.textSize};
  }

  & .buttonIconTitle {
    color: ${({ color, theme }) => color || theme.colors.base700};
    font-weight: ${({ theme }) => theme.typography.weights.regular};
    font-size: ${({ theme }) => theme.typography.sizes.m.textSize};
    line-height: ${({ theme }) => theme.typography.sizes.m.lineHeight};
    transition: 0.3s;
  }

  &.buttonIconLeft {
    flex-direction: row;
    & .iconClass {
      margin-right: 5px;
    }
  }
  &.buttonDisabled {
    opacity: 0.4;
    pointer-events: none;
  }
`;
