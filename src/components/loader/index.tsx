import * as React from 'react';
import { useTheme } from 'utils/hooks';
import { StyledLoader } from './style';

export interface LoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: string;
}

export const Loader = ({ color, className, style, ...props }: LoaderProps): JSX.Element => {
  const theme = useTheme();

  return <StyledLoader theme={theme} color={color} className={className} style={style} {...props} />;
};
