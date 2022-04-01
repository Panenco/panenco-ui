import * as React from 'react';
import { useTheme } from 'utils/hooks';
import { Text } from '../../index';
import { Tooltip, TooltipProps } from '../tooltip';
import { StyledAvatar, StyledAvatarImg } from './style';

const getFontSize = (theme, size) => {
  switch (true) {
    case size < 28 : 
      return theme.typography.sizes.xs;
    case size < 34 : 
      return theme.typography.sizes.s;
    case size < 42 : 
      return theme.typography.sizes.m;
    case size < 56 : 
      return theme.typography.sizes.l;
    case size >= 56 : 
      return theme.typography.sizes.xl;
    default : 
      return theme.typography.sizes.m;
  }
}

export interface AvatarProps {
  className?: string;
  avatar?: string;
  avatarAlt?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  size?: number;
  tooltip?: boolean;
  tooltipProps?: TooltipProps;
}

export const Avatar: React.FC<AvatarProps> = ({
  className,
  firstName,
  lastName,
  avatar,
  email,
  tooltipProps,
  size = 54,
  tooltip,
  avatarAlt = 'avatar alt',
}: AvatarProps) => {
  const theme = useTheme();
  const fontSize = getFontSize(theme, size);

  if (tooltip) {
    return (
      <Tooltip content={email || `${firstName || ''} ${lastName || ''}`} {...tooltipProps}>
        {avatar ? (
          <StyledAvatarImg src={avatar} alt={avatarAlt} style={{ height: size, width: size }} className={className} />
        ) : (
          <StyledAvatar theme={theme} style={{ height: size, width: size }} className={className}>
            {(firstName || lastName) &&
              <Text size={fontSize} weight={theme.typography.weights.bold} color={theme.colors.base500}>
                {`${firstName?.charAt(0)?.toUpperCase() || ''}${lastName?.charAt(0)?.toUpperCase() || ''}`}
              </Text>
            }
          </StyledAvatar>
        )}
      </Tooltip>
    )} return (
        avatar ? (
          <StyledAvatarImg src={avatar} alt={avatarAlt} style={{ height: size, width: size }} className={className} />
        ) : (
          <StyledAvatar theme={theme} style={{ height: size, width: size }} className={className}>
          {(firstName || lastName) &&
            <Text size={fontSize} weight={theme.typography.weights.bold} color={theme.colors.base500}>
              {`${firstName?.charAt(0)?.toUpperCase() || ''}${lastName?.charAt(0)?.toUpperCase() || ''}`}
            </Text>
          }
          </StyledAvatar>
        )
    );
};
