import * as React from 'react';
import { useTheme } from 'utils/hooks';
import { Icon, Text } from '../../index';
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
  src?: string;
  alt?: string;
  size?: number;
  tooltip?: boolean;
  tooltipProps?: Omit<TooltipProps, 'children'>;
  children?: React.ReactNode | string;
  imgProps?: React.ImgHTMLAttributes<HTMLImageElement>;
}

export const Avatar: React.FC<AvatarProps> = ({
  className,
  src,
  tooltipProps,
  size = 54,
  tooltip,
  alt,
  children,
  imgProps,
}: AvatarProps) => {
  const theme = useTheme();
  const fontSize = getFontSize(theme, size);
  const [isImageLoadedError, setImageLoadedError] = React.useState(false);

  const renderAvatar = () => (
    src ? (
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
              {children || alt?.charAt(0) || <Icon icon={Icon.icons.user} size={size / 2} style={{ display: 'flex' }} />} 
            </Text>
          </StyledAvatar>
        )}
      </>
    ) : (
      <StyledAvatar theme={theme} style={{ height: size, width: size }} className={className}>
        <Text size={fontSize} weight={theme.typography.weights.bold} color={theme.colors.base500}>
          {children} 
        </Text>
      </StyledAvatar>
    )
  );

  if (tooltip) {
    return (
      <Tooltip content={tooltipProps?.content} {...tooltipProps}>
        {renderAvatar()}
      </Tooltip>
    )
  } 
  
  return renderAvatar();
};
