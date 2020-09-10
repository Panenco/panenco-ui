import * as React from 'react';
import { LinkProps as RRDLinkProps, Link as RRDLink } from 'react-router-dom';
import cx from 'classnames';
import { useTheme, useMode } from 'utils/hooks';
import { StyledLink } from './style';

export interface LinkProps extends RRDLinkProps {
  disabled?: boolean;
}

export const Link = React.forwardRef<RRDLink, LinkProps>(
  ({ children, disabled, className, style, to = '', ...props }: LinkProps, ref): JSX.Element => {
    const theme = useTheme();
    const { mode } = useMode();

    return (
      <StyledLink
        theme={theme}
        mode={mode}
        style={style}
        to={to}
        tabIndex={disabled ? -1 : null}
        className={cx('link', disabled && 'disabled', className)}
        ref={ref}
        {...props}
      >
        {children}
      </StyledLink>
    );
  },
);
