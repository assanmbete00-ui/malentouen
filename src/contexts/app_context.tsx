import { createContext, useContext, type ReactNode } from "react";
import type { TFunction } from "i18next";

import useTranslate from "@hooks/use_translate";
import i18next from "@utils/localization";

type AppContextProps = {
  translate: TFunction<"translation", undefined>;
  logoutUser: () => Promise<void>;
};

const appContextDefaultValues: AppContextProps = {
  translate: i18next.t,
  logoutUser: async () => {},
};

const AppContext = createContext<AppContextProps | undefined>(undefined);

type AppContextProviderProps = {
  children: ReactNode;
};

export function AppContextProvider({ children }: AppContextProviderProps) {
  const { translate } = useTranslate();

  const logoutUser = async (): Promise<void> => {
    // À compléter quand l'auth admin sera prête
  };

  return (
    <AppContext.Provider
      value={{
        translate,
        logoutUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used inside AppContextProvider");
  }

  return context;
}