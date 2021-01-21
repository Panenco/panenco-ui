import * as React from 'react';
import { LinkProps as RRDLinkProps, Link as RRDLink } from 'react-router-dom';
import cx from 'classnames';
import { useTheme, useMode } from 'utils/hooks';
import { StyledLink, StyledAnchor } from './style';

export interface LinkProps extends RRDLinkProps {
  disabled?: boolean;
}

export const Link = React.forwardRef<RRDLink, LinkProps>(
  ({ children, disabled, className, style, href, to = '', ...props }: LinkProps, ref): JSX.Element => {
    const theme = useTheme();
    const { mode } = useMode();
    const StyledComponent = href ? StyledAnchor : StyledLink;

    return (
      <StyledComponent
        theme={theme}
        mode={mode}
        style={style}
        to={to}
        href={href}
        tabIndex={disabled ? -1 : null}
        className={cx('link', disabled && 'disabled', className)}
        ref={ref}
        {...props}
      >
        {children}
      </StyledComponent>
    );
  },
);
