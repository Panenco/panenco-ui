import * as React from 'react';
import { LinkProps as RRDLinkProps } from 'react-router-dom';
import cx from 'classnames';
import { useTheme, useMode } from 'utils/hooks';
import { StyledLink } from './style';

export interface LinkProps extends RRDLinkProps {
  disabled?: boolean;
  className?: string;
  to: string;
  children: React.ReactNode;
}

export const Link = React.forwardRef<any, LinkProps>(
  ({ children, component, disabled, className, style, to = '', ...props }: LinkProps, ref) => {
    const theme = useTheme();
    const { mode } = useMode();

    return (
      <StyledLink
        as={component}
        theme={theme}
        mode={mode}
        style={style}
        to={to}
        tabIndex={disabled ? -1 : 0}
        className={cx('link', disabled && 'disabled', className)}
        ref={ref}
        {...props}
      >
        {children}
      </StyledLink>
    );
  },
);
