import * as React from 'react';
import { useTheme } from 'utils/hooks';
import { Icon, Text } from '../../index';
import { StyledAvatar, StyledAvatarImg } from './style';

const getFontSize = (theme, size) => {
  switch (true) {
    case size < 28:
      return theme.typography.sizes.xs;
    case size < 34:
      return theme.typography.sizes.s;
    case size < 42:
      return theme.typography.sizes.m;
    case size < 56:
      return theme.typography.sizes.l;
    case size >= 56:
      return theme.typography.sizes.xl;
    default:
      return theme.typography.sizes.m;
  }
};

export interface AvatarProps {
  /**
   * alt text for avatar
   */
  alt?: string;
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

export const Avatar: React.FC<AvatarProps> = ({ className, src, size = 54, alt, children, imgProps }: AvatarProps) => {
  const theme = useTheme();
  const fontSize = getFontSize(theme, size);
  const [isImageLoadedError, setImageLoadedError] = React.useState(false);

  if (src)
    return (
      <>
        {!isImageLoadedError ? (
          <StyledAvatarImg
            src={src}
            alt={alt}
            style={{ height: size, width: size }}
            className={className}
            onError={() => setImageLoadedError(true)}
            {...imgProps}
          />
        ) : (
          <StyledAvatar theme={theme} style={{ height: size, width: size }} className={className}>
            <Text size={fontSize} weight={theme.typography.weights.bold} color={theme.colors.base500}>
              {/* {children || alt?.charAt(0) || <Icon icon='user' size='sm' style={{ display: 'flex' }} />} */}
            </Text>
          </StyledAvatar>
        )}
      </>
    );
  return (
    <StyledAvatar theme={theme} style={{ height: size, width: size }} className={className}>
      <Text size={fontSize} weight={theme.typography.weights.bold} color={theme.colors.base500}>
        {children}
      </Text>
    </StyledAvatar>
  );
};
