import { styled } from 'linaria/react';
import { PUITheme, ThemeMode } from 'utils/types';

export const StyledAccordionPrimary = styled.div<{
  theme: PUITheme;
  mode: ThemeMode;
}>`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  border: 1px solid ${(props: any): string => props.theme.colors.base700};
  background-color: ${(props: any): string =>
    props.mode === ThemeMode.dark ? props.theme.colors.base900 : props.theme.colors.base100};
  font-size: ${(props: any): string => props.theme.typography.sizes.m.textSize};
  color: ${(props: any): string =>
    props.mode === ThemeMode.dark ? props.theme.colors.base100 : props.theme.colors.base900};
  line-height: 1.3;
  width: 100%;

  &:hover {
    border-color: ${(props: any): string =>
      props.mode === ThemeMode.dark ? props.theme.colors.base100 : props.theme.colors.primary500};
    .accordionHeader,
    .accordionHeaderIcon {
      cursor: pointer;
      /* color: ${(props: any): string =>
        props.mode === ThemeMode.dark ? props.theme.colors.base100 : props.theme.colors.primary500}; */
    }
  }

  &:focus-within {
    border-color: transparent;
    outline: ${(props: any): string => props.theme.colors.base900} solid 2px;
    outline-offset: -2px;
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
      color: ${(props: any): string => props.theme.colors.base700};

      &:hover {
        color: ${(props: any): string => props.theme.colors.primary500};
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
