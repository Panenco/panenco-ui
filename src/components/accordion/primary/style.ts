import { styled } from 'linaria/react';
import { ThemeMode } from 'utils/types';

export const StyledAccordionPrimary = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  border: 1px solid ${(props: any): string => props.theme.colors.secondary};
  background-color: ${(props: any): string =>
    props.mode === ThemeMode.dark ? props.theme.colors.dark : props.theme.colors.light};
  font-size: ${(props: any): string => props.theme.typography.sizes.m.textSize};
  color: ${(props: any): string =>
    props.mode === ThemeMode.dark ? props.theme.colors.light : props.theme.colors.primary};
  line-height: 1.3;
  width: 100%;

  &:hover {
    border-color: ${(props: any): string =>
      props.mode === ThemeMode.dark ? props.theme.colors.light : props.theme.colors.accent};
    .accordionHeader,
    .accordionHeaderIcon {
      cursor: pointer;
      /* color: ${(props: any): string =>
        props.mode === ThemeMode.dark ? props.theme.colors.light : props.theme.colors.accent}; */
    }
  }

  &:focus-within {
    border-color: transparent;
    box-shadow: 0 0 0 2px ${(props: any): string => props.theme.colors.outline};
  }

  .accordionHeader {
    display: flex;
    justify-content: space-between;
    padding: 14px 16px;
    border: none;
    border-radius: inherit;
    background-color: inherit;
    font-size: inherit;
    color: inherit;
    align-items: center;

    &Title {
      width: 100%;
      text-align: left;
    }

    &Icon,
    &IconsIcon {
      display: flex;
      flex-shrink: 0;
      width: 16px;
      height: 16px;
      margin-left: 16px;
      color: ${(props: any): string => props.theme.colors.secondary};

      &:hover {
        color: ${(props: any): string => props.theme.colors.accent};
      }
    }

    &IconLeft {
      width: 16px;
      height: 16px;
      margin-right: 16px;
      display: flex;
      flex-shrink: 0;

      &Open {
        transition: 500ms;
        transform: rotate(90deg);
      }

      &Closed {
        transition: 0.5s;
      }
    }
  }

  .accordionContent {
    padding: 4px 26px 32px 32px;
  }
`;
