import { styled } from 'linaria/react';

export const StyledAvatarGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .avatarGroupItem {
    margin-right: -8px;
    z-index: 99;

    &Count {
      z-index: 1;
    }
  }
`;
