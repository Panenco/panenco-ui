import styled from 'styled-components';
import { PUITheme } from '../../utils/types';

export const StyledPaper = styled.div<{
  theme: PUITheme;
}>`
  background-color: ${(props: any): string => {
    return props.theme.colors.base100;
  }};
  border: 1px solid;
  border-color: ${(props: any): string => {
    return props.theme.colors.base700;
  }};
  border-radius: 4px;
  padding: 24px;
`;
