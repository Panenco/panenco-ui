import * as React from 'react';

interface AccordionContextType {
  opened: any;
  setOpened: (arg?: any) => void;
}

export const AccordionGroupContext = React.createContext<AccordionContextType | null>(null);

export const useAccordionContext = () => React.useContext(AccordionGroupContext);
export const AccordionGroup = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const [opened, setOpened] = React.useState(null);

  return <AccordionGroupContext.Provider value={{ opened, setOpened }}>{children}</AccordionGroupContext.Provider>;
};
