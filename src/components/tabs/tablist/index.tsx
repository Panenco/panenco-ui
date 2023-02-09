import * as React from 'react';
import cx from 'classnames';

import { useCombinedRefs } from 'utils/hooks/combinedrefs';
import { StyledTablist } from './style';

export interface TablistProps {
  /**
   * Whether to automatically activate the next tab when the user presses the left or right arrow keys.
   * @default false
   * */
  autoActivation?: boolean;
  /**
   * The content of the tablist.
   * */
  children: React.ReactNode;
  /**
   * The class name of the tablist.
   * */
  className?: string;
}

export const Tablist = React.forwardRef(
  ({ children, className, autoActivation, ...props }: TablistProps, ref): JSX.Element => {
    const tablistRef = React.useRef(null);
    const combinedRef = useCombinedRefs(tablistRef, ref);

    const getNextTab = (tablist, tab): HTMLButtonElement =>
      tab?.nextElementSibling ? tab.nextElementSibling : tablist.firstChild;

    const getPrevTab = (tablist, tab): HTMLButtonElement =>
      tab?.previousElementSibling ? tab.previousElementSibling : tablist.lastChild;

    const moveFocus = (tablist, traversalFunction): void => {
      const currentTab = document.activeElement;
      let nextTab = traversalFunction(tablist, currentTab);
      if (nextTab.disabled) nextTab = traversalFunction(tablist, nextTab);
      if (autoActivation) nextTab.click();
      nextTab.focus();
    };

    const handleKeydown = (event: React.KeyboardEvent): void => {
      switch (event.key) {
        case 'ArrowRight':
          event.preventDefault();
          moveFocus(tablistRef.current, getNextTab);
          break;
        case 'ArrowLeft':
          event.preventDefault();
          moveFocus(tablistRef.current, getPrevTab);
          break;
        default:
          break;
      }
    };

    return (
      <StyledTablist
        role='tablist'
        ref={combinedRef}
        className={cx('tablist', className)}
        onKeyDown={handleKeydown}
        {...props}
      >
        {children}
      </StyledTablist>
    );
  },
);
