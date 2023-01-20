import * as React from 'react';
import cx from 'classnames';

import { Avatar, AvatarProps } from '../../index';
import { StyledAvatarGroup } from './style';

export interface AvatarGroupProps {
  avatarProps?: AvatarProps;
  avatars: any[];
  className?: string;
  max?: number;
}

export const AvatarGroup: React.FC<AvatarGroupProps> = ({
  /**
   * class name of the list
   */
  className,
  /**
   * avatar list, should be an array of type AvatarProps
   */
  avatars,
  /**
   * the maximum number of avatars, if you want to show all the avatars, just don`t pass it
   */
  max = avatars.length,
  /**
   * these are general rules for each component of the avatar, has a lower priority than the rules of avatars
   */
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
