import styled from 'styled-components';

export const StyledChip = styled.button<{
  checked?: boolean;
  iconSize?: number | string;
}>`
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  position: relative;
  transition: 0.3s;
  padding: 3px 11px;
  border-radius: 4px;
  background-color: ${({ theme, checked }) => {
    return checked ? theme.colors.primary500 : theme.colors.base100;
  }};
  border: 1px solid ${({ theme }) => theme.colors.primary500};
  color: ${({ theme, checked }) => {
    return checked ? theme.colors.base100 : theme.colors.primary500;
  }};

  &:hover,
  &:active {
    background-color: ${({ theme, checked }) => {
      return checked ? theme.colors.primary700 : theme.colors.primary200;
    }};
    border: 1px solid ${({ theme }) => theme.colors.primary700};
    .labelTitle {
      color: ${({ theme, checked }) => {
        return checked ? theme.colors.base100 : theme.colors.primary700;
      }};
    }
  }

  &:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.base900};
  }

  &:focus-visible {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.base900};
  }

  .labelTitle {
    color: inherit;
    line-height: 16px;
  }

  .svg {
    width: 16px;
    height: 16px;
    margin-left: 10px;
  }

  &.chipDisabled {
    opacity: 0.4;
    pointer-events: none;
  }
`;
