import * as React from 'react';
import { useTheme } from 'utils/hooks';
import { Text, TextSize } from '../../index';
import { StyledAvatar, StyledAvatarImg } from './style';

export interface AvatarProps {
  children?: React.ReactNode | string;
  className?: string;
  fontSize?: TextSize;
  imgProps?: React.ImgHTMLAttributes<HTMLImageElement>;
  size?: number;
  src?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  className,
  size = 54,
  children,
  imgProps,
  src,
  fontSize,
}: AvatarProps) => {
  const theme = useTheme();

  if (src)
    return <StyledAvatarImg style={{ height: size, width: size }} className={className} {...imgProps} src={src} />;

  return (
    <StyledAvatar theme={theme} style={{ height: size, width: size }} className={className}>
      <Text
        size={fontSize || theme.typography.sizes.m}
        weight={theme.typography.weights.bold}
        color={theme.colors.base500}
      >
        {children}
      </Text>
    </StyledAvatar>
  );
};
