import styled from 'styled-components';
import { PUITheme } from 'utils/types';

export const StyledAvatar = styled.div<{
  theme: PUITheme;
}>`
  background-color: ${(props): string => props.theme.colors.base200};
  border-radius: 50%;
  border: 1px solid ${(props): string => props.theme.colors.base300};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const StyledAvatarImg = styled.img`
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`;
