import styled, { css } from 'styled-components';
import { PUITheme } from 'utils/types';
import { AccordionVariant } from './types';

export const StyledAccordion = styled.div<{
  theme: PUITheme;
  variant: AccordionVariant;
}>`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.base100};
  font-size: ${({ theme }) => theme.typography.sizes.m.textSize};
  line-height: 1.3;
  width: 100%;
  ${({ variant, theme }) =>
    variant === 'outlined'
      ? css`
          border-radius: 4px;
          border: 1px solid ${theme.colors.base700};
          color: ${theme.colors.base900};
        `
      : css`
          border: none;
        `}

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary500};
    .accordionHeader,
    .accordionHeaderIcon {
      cursor: pointer;
      ${({ variant, theme }) =>
        variant === 'text' &&
        css`
          color: ${theme.colors.primary700};
        `}
    }
  }

  &:focus-within {
    outline: ${({ theme }) => theme.colors.base900} solid 2px;
    outline-offset: -2px;
    ${({ variant }) =>
      variant === 'outlined'
        ? css`
            border-color: transparent;
          `
        : css`
            border-radius: 4px;
          `}
  }

  .accordionHeader {
    display: flex;
    border: none;
    border-radius: inherit;
    background-color: inherit;
    font-size: inherit;
    align-items: center;

    ${({ variant, theme }) =>
      variant === 'outlined'
        ? css`
            justify-content: space-between;
            padding: 14px 16px;
            color: inherit;
          `
        : css`
            justify-content: flex-start;
            padding: 14px 4px;
            color: ${theme.colors.primary500};
          `}

    &Title {
      width: 100%;
      text-align: left;
      ${({ variant }) =>
        variant === 'text' &&
        css`
          transition: 0.5s;
          color: inherit;
        `}
    }

    &Icon,
    &IconsIcon {
      display: flex;
      flex-shrink: 0;
      width: 16px;
      height: 16px;
      margin-left: 16px;
      color: ${({ theme }) => theme.colors.base700};

      &:hover {
        color: ${({ theme }) => theme.colors.primary500};
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
    ${({ theme, variant }) =>
      variant === 'outlined'
        ? css`
            padding: 4px 26px 32px 32px;
          `
        : css`
            padding: 16px;
            border-radius: 4px;
            background-color: ${theme.colors.base400};
            color: ${theme.colors.base900};
          `}
  }
`;
