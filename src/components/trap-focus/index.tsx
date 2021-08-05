import * as React from 'react';

export interface TrapFocusProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  active?: boolean;
}

// all focusable elements
const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

export const TrapFocus = ({ children, active = false }: TrapFocusProps): JSX.Element => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  const handleKeyDown = (e) => {
    const firstElement = containerRef?.current?.querySelectorAll<HTMLElement>(focusableElements)[0]; // get first element to be focused
    const focusableNodes = containerRef?.current?.querySelectorAll<HTMLElement>(focusableElements);
    const lastElement = focusableNodes?.[focusableNodes.length - 1]; // get last element to be focused

    const isTabPressed = e.key === 'Tab' || e.keyCode === 9;
    if (!isTabPressed) {
      return;
    }
    if (!Array.prototype.slice.call(focusableNodes).includes(document.activeElement)) {
      firstElement?.focus(); // add focus for the first focusable element
      e.preventDefault();
      return;
    }
    if (e.shiftKey) {
      // if shift key pressed for shift + tab combination
      if (document.activeElement === firstElement) {
        lastElement?.focus(); // add focus for the last focusable element
        e.preventDefault();
      }
    } else {
      // if tab key is pressed
      if (document.activeElement === lastElement) {
        // if focused has reached to last focusable element then focus first focusable element after pressing tab
        firstElement?.focus(); // add focus for the first focusable element
        e.preventDefault();
      }
    }
  };

  React.useEffect(() => {
    if (active) {
      const activeElement = document.activeElement;
      window.addEventListener('keydown', handleKeyDown);
      if (activeElement instanceof HTMLElement) {
        activeElement.blur();
      }
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        if (activeElement instanceof HTMLElement) {
          activeElement?.focus();
        }
      };
    }
    return;
  }, [active]);

  return <div ref={containerRef}>{children}</div>;
};
