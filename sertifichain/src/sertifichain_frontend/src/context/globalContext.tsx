import { createContext, useContext, useState, ReactNode } from "react";

type GlobalContextType = {
  showNavBar: boolean;
  setShowNavBar: (state: boolean) => void;
};

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [showNavBar, setShowNavBar] = useState<boolean>(true);

  return (
    <GlobalContext.Provider value={{ showNavBar, setShowNavBar }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) throw new Error("useGlobalContext must be used within GlobalProvider");
  return context;
};
