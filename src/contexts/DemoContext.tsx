import { createContext, useContext, useState, ReactNode } from "react";

interface DemoContextType {
  selecteIdFromMenu: number;
  setSelecteIdFromMenu: (id: number) => void;
}
const DemoContext = createContext<DemoContextType | undefined>(undefined);

export const useDemoContext = () => {
  const context = useContext(DemoContext);
  if (!context) {
    throw new Error("useDemoContext must be used within a DemoProvider");
  }
  return context;
};

export const DemoProvider = ({ children }: { children: ReactNode }) => {
  const [selecteIdFromMenu, setSelecteIdFromMenu] = useState<number>(0);

  return (
    <DemoContext.Provider value={{ selecteIdFromMenu, setSelecteIdFromMenu }}>
      {children}
    </DemoContext.Provider>
  );
};
