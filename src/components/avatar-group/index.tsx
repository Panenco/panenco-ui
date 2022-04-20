import * as React from 'react';
import cx from 'classnames';
import { Avatar, AvatarProps } from '../../index';
import { StyledAvatarGroup } from './style';

export interface AvatarGroupProps {
  max?: number
  className?: string;
  avatars: any[];
  avatarProps?: AvatarProps;
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
      {modifiedAvatars.map((avatar, idx) => 
        <Avatar
          // eslint-disable-next-line react/no-array-index-key
          key={`avatar${idx}key`}
          {...avatarProps}
          {...avatar}
          tooltipProps={{
            enterNextDelay: 0,
            ...avatarProps?.tooltipProps,
            ...avatar?.tooltipProps,
          }}
          className={cx('avatarGroupItem', avatarProps?.className)}
        />
      )}
      {!!(avatars.length - modifiedAvatars.length) && (
        <Avatar
          firstName='+'
          {...avatarProps}
          lastName={`${avatars.length - modifiedAvatars.length}`}
          className='avatarGroupItemCount'
        />
      )}
    </StyledAvatarGroup>
  )
};
