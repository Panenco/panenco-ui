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
      color: ${(props: any): string => props.theme.colors.primary700};
    }
  }

  &:focus {
    outline: 2px solid ${(props: any): string => props.theme.colors.base900};
  }

  & .iconClass {
    color: ${(props: any): string => props.color || props.theme.colors.base700};
    display: flex;
    flex-shrink: 0;
    transition: 0.3s;
    height: ${(props: any): string => convertToPixels(props.size) || props.theme.typography.sizes.m.textSize};
    width: ${(props: any): string => convertToPixels(props.size) || props.theme.typography.sizes.m.textSize};
  }

  & .buttonIconTitle {
    color: ${(props: any): string => props.color || props.theme.colors.base700};
    font-weight: ${(props: any): string => props.theme.typography.weights.regular};
    font-size: ${(props: any): string => props.theme.typography.sizes.m.textSize};
    line-height: ${(props: any): string => props.theme.typography.sizes.m.lineHeight};
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
