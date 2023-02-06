import styled from 'styled-components';

export const StyledTab = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 22px;
  border: 0;
  margin: 0;
  background-color: transparent;

  .iconClass {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }

  &:not(.selected):hover {
    background-color: ${({ theme }) => theme.colors.primary200};
  }

  &:focus {
    z-index: 1;
    outline: 2px solid ${({ theme }) => theme.colors.base900};
    outline-offset: 0;
  }

  &.disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  &.tab {
    border-bottom: 1px solid ${({ theme }) => theme.colors.base700};
    color: ${({ theme }) => theme.colors.base700};

    &.selected {
      padding-bottom: 10px;
      border-bottom: 3px solid ${({ theme }) => theme.colors.primary500};
      color: ${({ theme }) => theme.colors.base900};
    }

    &:not(.selected) {
      cursor: pointer;
    }
  }

  &.bookmarkTab {
    color: ${({ theme }) => theme.colors.base900};

    &.selected {
      padding-top: 9px;
      border-top: 3px solid ${({ theme }) => theme.colors.primary500};
      background-color: ${({ theme }) => theme.colors.base100};
    }

    &:not(.selected) {
      cursor: pointer;
    }
  }
`;
