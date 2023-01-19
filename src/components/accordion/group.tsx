import * as React from 'react';

interface AccordionContextType {
  opened?: React.RefObject<HTMLDivElement>;
  setOpened: (arg?: React.RefObject<HTMLDivElement>) => void;
}

export const AccordionGroupContext = React.createContext<AccordionContextType | null>(null);

export const useAccordionContext = () => React.useContext(AccordionGroupContext);
export const AccordionGroup = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const [opened, setOpened] = React.useState<React.RefObject<HTMLDivElement> | undefined>(undefined);

  return <AccordionGroupContext.Provider value={{ opened, setOpened }}>{children}</AccordionGroupContext.Provider>;
};
