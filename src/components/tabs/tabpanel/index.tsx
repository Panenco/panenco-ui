import * as React from 'react';
import cx from 'classnames';
import { useTabContext, getTabPanelId } from '../tabContext';
import { StyledTabpanel } from './style';

export interface TabpanelProps {
  index: number;
  className?: string;
  children: React.ReactNode;
}

export const Tabpanel = React.forwardRef(
  ({ index, children, className, ...props }: TabpanelProps, ref: any): JSX.Element | null => {
    const context = useTabContext()!;
    const id = getTabPanelId(context, index)!;
    const { indexSelected } = context;
    return indexSelected === index ? (
      <StyledTabpanel
        id={id}
        ref={ref}
        role="tabpanel"
        className={cx('tabpanel', className)}
        hidden={indexSelected !== index}
        {...props}
      >
        {children}
      </StyledTabpanel>
    ) : null;
  },
);
