import * as React from 'react';

export interface TrapFocusProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  active?: boolean;
}

// add all the elements which you want to make focusable
const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

export const TrapFocus = ({ children, active }: TrapFocusProps): JSX.Element => {
  const containerRef = React.useRef(null);

  const handleKeyDown = (e) => {
    const firstElement = (containerRef?.current as HTMLElement | null)?.querySelectorAll(focusableElements)[0] || null; // get first element to be focused
    const focusableNodes = (containerRef?.current as HTMLElement | null)?.querySelectorAll(focusableElements) || [];
    const lastElement = focusableNodes?.[focusableNodes.length - 1] || null; // get last element to be focused

    const isTabPressed = e.key === 'Tab' || e.keyCode === 9;
    if (!isTabPressed) {
      return;
    }
    if (!Array.prototype.slice.call(focusableNodes).includes(document.activeElement)) {
      (firstElement as HTMLElement)?.focus(); // add focus for the first focusable element
      e.preventDefault();
      return;
    }
    if (e.shiftKey) {
      // if shift key pressed for shift + tab combination
      if (document.activeElement === firstElement) {
        (lastElement as HTMLElement)?.focus(); // add focus for the last focusable element
        e.preventDefault();
      }
    } else {
      // if tab key is pressed
      if (document.activeElement === lastElement) {
        // if focused has reached to last focusable element then focus first focusable element after pressing tab
        (firstElement as HTMLElement)?.focus(); // add focus for the first focusable element
        e.preventDefault();
      }
    }
  };

  React.useEffect(() => {
    if (active) {
      const activeElement = document.activeElement;
      window.addEventListener('keydown', handleKeyDown);
      (activeElement as HTMLElement)?.blur();
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        (activeElement as HTMLElement)?.focus();
      };
    }
    return;
  }, [active]);

  return <div ref={containerRef}>{children}</div>;
};
