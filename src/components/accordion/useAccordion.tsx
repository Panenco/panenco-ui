import * as React from 'react';
import { useCombinedRefs } from 'utils/hooks/combinedrefs';
import { useAccordionContext } from './group';

export interface UseAccordionProps {
  isOpen?: boolean;
  onClick?: (e?: MouseEvent) => void;
  ref?: any;
}

export interface UseAccordinReturn {
  combinedRef: React.RefObject<HTMLDivElement>;
  handleClick: (event?: React.UIEvent) => void | undefined;
  isOpen?: boolean;
}

export const useAccordion = (props: UseAccordionProps): UseAccordinReturn => {
  const { isOpen: isOpened, onClick, ref } = props;
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
    isOpen,
    handleClick,
  };
};
