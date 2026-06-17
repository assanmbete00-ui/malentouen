import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
  type PaletteMode,
} from "@mui/material";

import {
  ADMIN_PRIMARY,
  ADMIN_LIGHT_MODE,
  ADMIN_DARK_MODE,
} from "@constants/admin_colors";

type AdminThemeContextType = {
  mode: PaletteMode;
  toggleTheme: () => void;
  setUserMode: (mode: PaletteMode) => void;
};

const AdminThemeContext = createContext<AdminThemeContextType | undefined>(
  undefined,
);

type AdminThemeProviderProps = {
  children: ReactNode;
};

export default function AdminThemeProvider({
  children,
}: AdminThemeProviderProps) {
  const [mode, setMode] = useState<PaletteMode>("light");

  const colors = mode === "light" ? ADMIN_LIGHT_MODE : ADMIN_DARK_MODE;

  const toggleTheme = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  const setUserMode = (value: PaletteMode) => {
    setMode(value);
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: ADMIN_PRIMARY,
            contrastText: "#FFFFFF",
          },
          background: {
            default: colors.BACKGROUND,
            paper: colors.SURFACE,
          },
          text: {
            primary: colors.TEXT_PRIMARY,
            secondary: colors.TEXT_SECONDARY,
          },
          divider: colors.BORDER,
        },
        typography: {
          fontFamily: "Inter, Roboto, Arial, sans-serif",
          button: {
            textTransform: "none",
            fontWeight: 600,
          },
        },
        shape: {
          borderRadius: 10,
        },
      }),
    [mode, colors],
  );

  return (
    <AdminThemeContext.Provider value={{ mode, toggleTheme, setUserMode }}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </AdminThemeContext.Provider>
  );
}

export function useAdminTheme() {
  const context = useContext(AdminThemeContext);

  if (!context) {
    throw new Error("useAdminTheme must be used inside AdminThemeProvider");
  }

  return context;
}
