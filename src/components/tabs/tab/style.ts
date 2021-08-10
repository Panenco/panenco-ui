import { styled } from 'linaria/react';

export const StyledTab = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 22px;
  margin: 0;
  border: 0;
  background-color: transparent;

  .iconClass {
    height: 20px;
    width: 20px;
    margin-right: 10px;
  }

  &:hover {
    background-color: ${(props: any): string => props.theme.colors.highlight};
  }

  &:focus {
    outline: 2px solid ${(props: any): string => props.theme.colors.outline};
    outline-offset: 0;
    z-index: 1;
  }

  &.disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  &.tab {
    color: ${(props: any): string => props.theme.colors.secondary};
    border-bottom: 1px solid ${(props: any): string => props.theme.colors.secondary};

    &.selected {
      color: ${(props: any): string => props.theme.colors.outline};
      border-bottom: 3px solid ${(props: any): string => props.theme.colors.accent};
      padding-bottom: 10px;
    }
  }

  &.bookmarkTab {
    color: ${(props: any): string => props.theme.colors.outline};

    &.selected {
      background-color: ${(props: any): string => props.theme.colors.light};
      border-top: 3px solid ${(props: any): string => props.theme.colors.accent};
      padding-top: 9px;
      &:hover {
        background-color: ${(props: any): string => props.theme.colors.highlight};
      }
    }
  }
`;
