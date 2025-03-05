import { createContext, useContext, useState, ReactNode } from "react";

type GlobalContextType = {
  loggedIn: boolean;
  setLoggedIn: (state: boolean) => void;
};

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  return (
    <GlobalContext.Provider value={{ loggedIn, setLoggedIn }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) throw new Error("useGlobalContext must be used within GlobalProvider");
  return context;
};
