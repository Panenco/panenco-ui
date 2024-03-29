import * as React from 'react';
import { useTheme } from 'styled-components';
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
  /**
   * content of the Avatar
   */
  children?: React.ReactNode | string;
  /**
   * Avatar class name, allow to override styles
   */
  className?: string;
  /**
   * props for Avatar image
   */
  imgProps?: React.ImgHTMLAttributes<HTMLImageElement>;
  /**
   * avatar size
   */
  size?: number;
  /**
   * link to image
   */
  src?: string;
}

export const Avatar: React.FC<AvatarProps> = ({ className, size = 54, children, imgProps, src }: AvatarProps) => {
  const { typography, colors } = useTheme();

  const fontSize = getFontSize(typography.sizes, size);

  if (src)
    return <StyledAvatarImg style={{ height: size, width: size }} className={className} {...imgProps} src={src} />;

  return (
    <StyledAvatar style={{ height: size, width: size }} className={className}>
      <Text size={fontSize || typography.sizes.m} weight={typography.weights.bold} color={colors.base500}>
        {children}
      </Text>
    </StyledAvatar>
  );
};
