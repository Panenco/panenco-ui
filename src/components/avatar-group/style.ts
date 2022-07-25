import styled from 'styled-components';

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
