import styled from 'styled-components';

export const StyledAvatar = styled.div`
  background-color: ${({ theme }) => theme.colors.base200};
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.base300};
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
