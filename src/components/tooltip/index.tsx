import * as React from 'react';
import cx from 'classnames';
import { useTheme, useMode } from 'utils/hooks';
import { StyledTooltip } from './style';

export interface TooltipProps extends React.HTMLAttributes<HTMLDivElement> {
  content: React.ReactNode | string;
  position?: string;
  className?: string;
  delay?: number;
  children: React.ReactNode;
}

export const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  ({ content, position = 'top', className, delay = 400, children, ...props }: TooltipProps, ref): JSX.Element => {
    const theme = useTheme();
    const { mode } = useMode();
    let timeout;
    const [active, setActive] = React.useState(false);

    const showTip = () => {
      timeout = setTimeout(() => {
        setActive(true);
      }, delay);
    };

    const hideTip = () => {
      clearInterval(timeout);
      setActive(false);
    };

    return (
      <StyledTooltip
        className={cx(className)}
        onMouseEnter={showTip}
        onMouseLeave={hideTip}
        ref={ref}
        theme={theme}
        mode={mode}
        {...props}
      >
        {children}
        {active && <div className={cx('tooltip', position)}>{content}</div>}
      </StyledTooltip>
    );
  },
);
