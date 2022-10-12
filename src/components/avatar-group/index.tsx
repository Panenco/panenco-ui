import * as React from 'react';
import * as cx from 'classnames';

import { Avatar, AvatarProps } from '../../index';
import { StyledAvatarGroup } from './style';

export interface AvatarGroupProps {
  avatarProps?: AvatarProps;
  avatars: any[];
  className?: string;
  max?: number;
}

export const AvatarGroup: React.FC<AvatarGroupProps> = ({
  className,
  avatars,
  max = avatars.length,
  avatarProps,
}: AvatarGroupProps) => {
  const modifiedAvatars = avatars.slice(0, max);

  return (
    <StyledAvatarGroup className={className}>
      {modifiedAvatars.map((avatar, idx) => (
        <Avatar
          // eslint-disable-next-line react/no-array-index-key
          key={`avatar${idx}key`}
          {...avatarProps}
          {...avatar}
          className={cx('avatarGroupItem', avatarProps?.className)}
        />
      ))}
      {!!(avatars.length - modifiedAvatars.length) && (
        <Avatar {...avatarProps}>{`+${avatars.length - modifiedAvatars.length}`}</Avatar>
      )}
    </StyledAvatarGroup>
  );
};
