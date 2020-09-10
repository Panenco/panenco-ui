import { styled } from 'linaria/react';
import { ThemeMode } from 'utils/types';

export const StyledStamp = styled.div`
  padding: 6px 16px;
  display: flex;
  justify-content: center;
  border-radius: 21px;
  font-size: 12px;
  color: ${(props: any): string => props.color};
  border: 1px solid ${(props: any): string => props.color};
  background-color: ${(props: any): string =>
    props.mode === ThemeMode.dark ? props.theme.colors.dark : props.theme.colors.light}};
`;
