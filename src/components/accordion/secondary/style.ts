import { styled } from 'linaria/react';
import { ThemeMode } from 'utils/types';
import { transparentize } from 'polished';

export const StyledAccordionSecondary = styled.div`
  display: flex;
  flex-direction: column;
  border: none;
  background-color: ${(props: any): string =>
    props.mode === ThemeMode.dark ? props.theme.colors.dark : props.theme.colors.light};
  font-size: ${(props: any): string => props.theme.typography.sizes.m.textSize};
  line-height: 1.3;
  width: 100%;

  &:hover {
    border-color: ${(props: any): string => props.theme.colors.accent};
    .accordionHeader,
    .accordionHeaderIcon {
      cursor: pointer;
      color: ${(props: any): string =>
        props.mode === ThemeMode.dark ? props.theme.colors.highlight : props.theme.colors.hover};
    }
  }

  &:focus-within {
    border-radius: 4px;
    box-shadow: 0 0 0 2px ${(props: any): string => props.theme.colors.outline};
  }

  .accordionHeader {
    display: flex;
    justify-content: flex-start;
    padding: 14px 4px;
    border: none;
    border-radius: inherit;
    background-color: inherit;
    font-size: inherit;
    align-items: center;

    color: ${(props: any): string =>
      props.mode === ThemeMode.dark ? props.theme.colors.light : props.theme.colors.accent};

    &Title {
      transition: 0.5s;
      color: inherit;
    }

    &Icon {
      width: 16px;
      height: 16px;
      margin-right: 5px;

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
    padding: 16px;
    border-radius: 4px;
    background-color: ${(props: any): string =>
      props.mode === ThemeMode.dark ? transparentize(0.4, props.theme.colors.secondary) : props.theme.colors.border};
    color: ${(props: any): string =>
      props.mode === ThemeMode.dark ? props.theme.colors.light : props.theme.colors.primary};
  }
`;
