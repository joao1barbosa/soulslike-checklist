import { 
  Dispatch, PropsWithChildren, SetStateAction,
  createContext, useDeferredValue, useState 
} from 'react';

interface SelectionContextType {
  totalBosses: number;
  setTotalBosses: Dispatch<SetStateAction<number>>;
  selectedBosses: number[];
  toggleBossSelection: (bossId: number) => void;
}

const defaultValue: SelectionContextType = {
  totalBosses: 0,
  setTotalBosses: () => {},
  selectedBosses: [],
  toggleBossSelection: () => {},
};

export const SelectionContext = createContext<SelectionContextType>(defaultValue);

export function SelectionProvider({ children }: PropsWithChildren){
  const [baseSelectedBosses, setSelectedBosses] = useState<number[]>([]);
  const [totalBosses, setTotalBosses] = useState<number>(0);
  const selectedBosses = useDeferredValue(baseSelectedBosses);

  const toggleBossSelection = (bossId: number) => {
    setSelectedBosses((prevSelected) =>
      prevSelected.includes(bossId)
        ? prevSelected.filter((id) => id !== bossId)
        : [...prevSelected, bossId]
    );
  };

  return (
    <SelectionContext.Provider value={{totalBosses, setTotalBosses, selectedBosses, toggleBossSelection }}>
      {children}
    </SelectionContext.Provider>
  );
}