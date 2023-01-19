import * as React from 'react';
import cx from 'classnames';

import { useTheme } from 'utils/hooks';
import { Icon, icons, IconType } from 'components';
import { useCombinedRefs } from 'utils/hooks/combinedrefs';
import { useTabContext, getTabPanelId } from '../tabContext';
import { StyledTab } from './style';

export interface TabProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  icon?: IconType | keyof typeof icons.sm;
  iconClassName?: string;
  index: number;
  selected?: boolean;
}

const BaseTab = React.forwardRef<React.RefObject<HTMLButtonElement>, TabProps>(
  (
    { index, className, iconClassName, icon, style, disabled, selected, onClick, children, ...props }: TabProps,
    ref,
  ): JSX.Element => {
    const theme = useTheme();
    const tabRef = React.useRef();
    const combinedRef = useCombinedRefs(tabRef, ref);

    const context = useTabContext()!;
    const { indexSelected, setIndexSelected } = context;

    React.useEffect(() => {
      if (selected) setIndexSelected(index);
    }, [selected]);

    const isSelected = indexSelected === index;

    const handleClick = (event): void => {
      setIndexSelected(index);
      if (onClick) onClick(event);
    };

    return (
      <StyledTab
        theme={theme}
        style={style}
        role='tab'
        disabled={disabled}
        aria-selected={isSelected}
        aria-controls={getTabPanelId(context, index)}
        tabIndex={isSelected ? 0 : -1}
        className={cx(className, disabled && 'disabled', isSelected && 'selected')}
        onClick={handleClick}
        ref={combinedRef}
        {...props}
      >
        {icon &&
          (React.isValidElement(icon) ? (
            icon
          ) : (
            <Icon size='sm' icon={icon} className={cx('iconClass', iconClassName)} />
          ))}

        {children}
      </StyledTab>
    );
  },
);

export const Tab = React.forwardRef(
  ({ className, ...props }: TabProps, ref: React.Ref<React.RefObject<HTMLButtonElement>> | undefined): JSX.Element => (
    <BaseTab ref={ref} className={cx('tab', className)} {...props} />
  ),
);

export const BookmarkTab = React.forwardRef(
  ({ className, ...props }: TabProps, ref: React.Ref<React.RefObject<HTMLButtonElement>>): JSX.Element => (
    <BaseTab ref={ref} className={cx('bookmarkTab', className)} {...props} />
  ),
);
