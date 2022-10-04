import styled from 'styled-components';
import { PUITheme } from 'utils/types';

export const StyledDropzone = styled.div<{
  error?: string;
  isDragActive?: boolean;
  loading?: boolean;
  theme: PUITheme;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 4px;
  width: 100%;
  padding: 40px 56px;
  border-style: solid;
  background-color: ${(props: any): string => {
    if (props.loading) {
      return props.theme.colors.base400;
    }
    return props.theme.colors.primary200;
  }};
  border-width: ${(props: any): string => {
    if (props.error) {
      return '2px';
    }
    return props.isDragActive ? '2px' : '1px';
  }};
  border-color: ${(props: any): string => {
    if (props.error) {
      return props.theme.colors.error;
    }
    if (props.isDragActive) {
      return props.theme.colors.primary500;
    }
    return props.theme.colors.primary200;
  }};
  color: ${(props: any): string => {
    if (props.loading) {
      return props.theme.colors.primary700;
    }
    return props.theme.colors.primary500;
  }};
  outline: none;

  &:focus {
    box-shadow: 0 0 0 2px ${(props: any): string => props.theme.colors.base900};
  }

  &:hover {
    cursor: pointer;
    outline: 2px solid
      ${(props: any): string => {
        if (props.color) {
          return props.color;
        }
        return props.theme.colors.primary500;
      }};
  }

  .icon {
    display: flex;
    flex-shrink: 0;
    margin-bottom: 20px;
    color: ${(props: any): string => {
      if (props.error) {
        return props.theme.colors.error;
      }
      if (props.isDragActive) {
        return props.theme.colors.primary700;
      }
      return props.theme.colors.primary500;
    }};
  }

  .content {
    color: ${(props: any): string => {
      if (props.isDragActive) {
        return props.theme.colors.primary700;
      }
      return props.theme.colors.primary500;
    }};
    text-align: center;

    &Loading {
      color: ${(props: any): string => props.theme.colors.base700};
      margin-top: 20px;
    }
  }

  .additionalContent {
    margin-top: 25px;
  }
`;
