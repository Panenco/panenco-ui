import * as React from 'react';
import { useCombinedRefs } from 'utils/hooks/combinedrefs';
import { PUITheme, ThemeMode } from '../../utils/types';
import { useAccordionContext } from './group';

export interface UseAccordinProps {
  ref?: any;
  onClick?: (e?: MouseEvent) => void;
  isOpen?: boolean;
  theme: PUITheme;
  mode: ThemeMode;
}

export interface UseAccordinReturn {
  combinedRef: React.RefObject<React.ReactNode>;
  theme: PUITheme;
  mode: ThemeMode;
  isOpen?: boolean;
  handleClick: (event?: React.UIEvent) => void | undefined;
}

export const useAccordion = (props: UseAccordinProps): UseAccordinReturn => {
  const { isOpen: isOpened, onClick, ref, mode, theme } = props;
  const [isOpen, setOpen] = React.useState(isOpened);
  const innerRef = React.useRef();
  const combinedRef = useCombinedRefs(innerRef, ref);
  const groupContext = useAccordionContext();
  const isPartOfGroup = groupContext !== null;

  const toggleOpened = (): void => {
    setOpen(!isOpen);
  };

  const handleOpenWithinGroup = (): void => {
    if (groupContext !== null) {
      const { setOpened } = groupContext;
      setOpened(innerRef.current);
    }
  };

  const handleClick = (event): void => {
    event.persist();
    toggleOpened();
    if (isPartOfGroup) {
      handleOpenWithinGroup();
    }
    if (onClick) onClick(event);
  };

  React.useEffect(() => {
    if (isPartOfGroup) {
      if (groupContext != null && groupContext.opened && groupContext.opened !== innerRef.current) {
        setOpen(false);
      }
    }
  }, [groupContext]);

  React.useEffect(() => {
    if (isPartOfGroup && isOpened) {
      handleOpenWithinGroup();
    }
  }, []);

  return {
    combinedRef,
    theme,
    mode,
    isOpen,
    handleClick,
  };
};
