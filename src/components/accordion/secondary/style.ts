import { styled } from 'linaria/react';
import { ThemeMode, PUITheme } from 'utils/types';
import { transparentize } from 'polished';

export const StyledAccordionSecondary = styled.div<{
  theme: PUITheme;
  mode: ThemeMode;
}>`
  position: relative;
  display: flex;
  flex-direction: column;
  border: none;
  background-color: ${(props: any): string =>
    props.mode === ThemeMode.dark ? props.theme.colors.base900 : props.theme.colors.base100};
  font-size: ${(props: any): string => props.theme.typography.sizes.m.textSize};
  line-height: 1.3;
  width: 100%;

  &:hover {
    border-color: ${(props: any): string => props.theme.colors.primary500};
    .accordionHeader,
    .accordionHeaderIcon {
      cursor: pointer;
      color: ${(props: any): string =>
        props.mode === ThemeMode.dark ? props.theme.colors.primary200 : props.theme.colors.primary700};
    }
  }

  &:focus-within {
    border-radius: 4px;
    outline: ${(props: any): string => props.theme.colors.base900} solid 2px;
    outline-offset: -2px;
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
      props.mode === ThemeMode.dark ? props.theme.colors.base100 : props.theme.colors.primary500};

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
      props.mode === ThemeMode.dark ? transparentize(0.4, props.theme.colors.base700) : props.theme.colors.base400};
    color: ${(props: any): string =>
      props.mode === ThemeMode.dark ? props.theme.colors.base100 : props.theme.colors.base900};
  }
`;
