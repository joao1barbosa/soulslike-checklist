import { PropsWithChildren, createContext, useState } from 'react';

interface SelectionContextType {
  selectedBosses: number[];
  toggleBossSelection: (bossId: number) => void;
}

const defaultValue: SelectionContextType = {
  selectedBosses: [],
  toggleBossSelection: () => {},
};

export const SelectionContext = createContext<SelectionContextType>(defaultValue);

export function SelectionProvider({ children }: PropsWithChildren){
  const [selectedBosses, setSelectedBosses] = useState<number[]>([]);

  const toggleBossSelection = (bossId: number) => {
    setSelectedBosses((prevSelected) =>
      prevSelected.includes(bossId)
        ? prevSelected.filter((id) => id !== bossId)
        : [...prevSelected, bossId]
    );
  };

  return (
    <SelectionContext.Provider value={{ selectedBosses, toggleBossSelection }}>
      {children}
    </SelectionContext.Provider>
  );
}