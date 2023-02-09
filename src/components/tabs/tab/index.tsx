import * as React from 'react';
import cx from 'classnames';

import { Icon, icons, IconType } from 'components';
import { useCombinedRefs } from 'utils/hooks/combinedrefs';
import { useTabContext, getTabPanelId } from '../tabContext';
import { StyledTab } from './style';

export interface TabProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The HTML element to render the tab as.
   */
  as?: React.ElementType;
  /**
   * The content of the tab.
   */
  children: React.ReactNode;
  /**
   * The class name of the tab.
   * @default ''
   * */
  className?: string;
  /**
   * Whether the tab is disabled.
   * @default false
   * */
  disabled?: boolean;
  /**
   * The icon to display.
   * */
  icon?: IconType | keyof typeof icons.sm;
  /**
   * The class name of the icon.
   * @default ''
   * */
  iconClassName?: string;
  /**
   * The index of the tab.
   * */
  index: number;
  /**
   * The style of the tab.
   * */
  selected?: boolean;
  /**
   * The `to` prop for the NavLink.
   * */
  to?: string;
}

const BaseTab = React.forwardRef<React.RefObject<HTMLButtonElement>, TabProps>(
  (
    { as, index, className, iconClassName, icon, style, disabled, selected, onClick, children, ...props }: TabProps,
    ref,
  ): JSX.Element => {
    const tabRef = React.useRef();
    const combinedRef = useCombinedRefs(tabRef, ref);

    const context = useTabContext();

    React.useEffect(() => {
      if (context && selected) {
        const { setIndexSelected } = context;
        setIndexSelected(index);
      }
    }, [selected]);

    const handleClick = (event): void => {
      if (context) {
        const { setIndexSelected } = context;
        setIndexSelected(index);
      }

      if (onClick) onClick(event);
    };

    const isSelected = context ? context.indexSelected === index : undefined;

    const tabIndex = isSelected ? 0 : -1;

    return (
      <StyledTab
        activeClassName='selected'
        as={as}
        style={style}
        role='tab'
        disabled={disabled}
        aria-selected={isSelected}
        aria-controls={context ? getTabPanelId(context, index) : undefined}
        className={cx(className, disabled && 'disabled', isSelected && 'selected')}
        onClick={handleClick}
        ref={combinedRef}
        tabIndex={context ? tabIndex : undefined}
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
