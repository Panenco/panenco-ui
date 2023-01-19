import * as React from 'react';
import { idGenerator } from 'utils/helpers';

interface TabContextType {
  idPrefix: string;
  indexSelected: number;
  setIndexSelected: (arg: number) => void;
}

export interface TabContextProps {
  children: React.ReactNode;
}

export const getTabId = (context: TabContextType, index: number): string => {
  const idPrefix = context?.idPrefix;
  return `tab-${idPrefix}-${index}`;
};

export const getTabPanelId = (context: TabContextType, index: number): string => {
  const idPrefix = context?.idPrefix;
  return `panel-${idPrefix}-${index}`;
};

export const Context = React.createContext<TabContextType | null>(null);

export const useTabContext = () => React.useContext(Context);

const getIdPrefix = (): string => {
  const [prefix, setPrefix] = React.useState('');
  React.useEffect(() => {
    setPrefix(idGenerator());
  }, []);
  return prefix;
};

export const TabContext = ({ children }: TabContextProps): JSX.Element => {
  const [indexSelected, setIndexSelected] = React.useState(0);
  const idPrefix = getIdPrefix();
  return <Context.Provider value={{ idPrefix, indexSelected, setIndexSelected }}>{children}</Context.Provider>;
};
