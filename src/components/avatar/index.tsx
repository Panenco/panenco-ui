import * as React from 'react';
import { useTheme } from 'utils/hooks';
import { PUISizes, Text } from '../../index';
import { StyledAvatar, StyledAvatarImg } from './style';

const getFontSize = (sizes: PUISizes, size: number) => {
  switch (true) {
    case size < 28:
      return sizes.xs;
    case size < 34:
      return sizes.s;
    case size < 42:
      return sizes.m;
    case size < 56:
      return sizes.l;
    case size >= 56:
      return sizes.xl;
    default:
      return sizes.m;
  }
};

export interface AvatarProps {
  children?: React.ReactNode | string;
  className?: string;
  imgProps?: React.ImgHTMLAttributes<HTMLImageElement>;
  size?: number;
  src?: string;
}

export const Avatar: React.FC<AvatarProps> = ({ className, size = 54, children, imgProps, src }: AvatarProps) => {
  const theme = useTheme();

  const fontSize = getFontSize(theme.typography.sizes, size);

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
