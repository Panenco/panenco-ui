import * as React from 'react';
import { StyledLoader } from './style';

export interface LoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The color of the loader
   * */
  color?: string;
}

export const Loader = ({ color, className, style, ...props }: LoaderProps): JSX.Element => {
  return <StyledLoader color={color} className={className} style={style} {...props} />;
};
