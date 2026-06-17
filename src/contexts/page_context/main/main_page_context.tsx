import { createContext, ReactNode } from "react";

interface MainPageContextType {
  // Add your context properties here
}

export const MainPageContext = createContext<MainPageContextType | undefined>(
  undefined,
);

interface MainPageContextProviderProps {
  children: ReactNode;
}

export function MainPageContextProvider({
  children,
}: MainPageContextProviderProps) {
  const value: MainPageContextType = {
    // Add your context values here
  };

  return (
    <MainPageContext.Provider value={value}>
      {children}
    </MainPageContext.Provider>
  );
}
