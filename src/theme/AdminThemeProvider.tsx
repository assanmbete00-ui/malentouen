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
  ADMIN_SECONDARY,
  ADMIN_LIGHT_MODE,
  ADMIN_DARK_MODE,
  ADMIN_STATUS,
} from "@constants/admin_colors";

declare module "@mui/material/styles" {
  interface Palette {
    sidebar: { main: string };
    header: { main: string };
  }
  interface PaletteOptions {
    sidebar?: { main: string };
    header?: { main: string };
  }
}

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

export default function AdminThemeProvider({ children }: AdminThemeProviderProps) {
  const [mode, setMode] = useState<PaletteMode>("light");

  const colors = mode === "light" ? ADMIN_LIGHT_MODE : ADMIN_DARK_MODE;

  const toggleTheme = () => setMode((prev) => (prev === "light" ? "dark" : "light"));
  const setUserMode = (value: PaletteMode) => setMode(value);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: { main: ADMIN_PRIMARY, contrastText: "#FFFFFF" },
          secondary: { main: ADMIN_SECONDARY, contrastText: "#FFFFFF" },
          background: { default: colors.BACKGROUND, paper: colors.SURFACE },
          text: { primary: colors.TEXT_PRIMARY, secondary: colors.TEXT_SECONDARY },
          divider: colors.BORDER,
          sidebar: { main: colors.SIDEBAR },
          header: { main: colors.HEADER },
          success: { main: ADMIN_STATUS.SUCCESS },
          warning: { main: ADMIN_STATUS.WARNING },
          error: { main: ADMIN_STATUS.ERROR },
          info: { main: ADMIN_STATUS.INFO },
        },
        typography: {
          fontFamily: "Inter, Roboto, Arial, sans-serif",
          h1: { fontWeight: 800, letterSpacing: "-0.02em" },
          h2: { fontWeight: 700, letterSpacing: "-0.01em" },
          h3: { fontWeight: 700 },
          h4: { fontWeight: 600 },
          h5: { fontWeight: 600 },
          h6: { fontWeight: 600 },
          button: { textTransform: "none", fontWeight: 600 },
        },
        shape: { borderRadius: 10 },
        components: {
          MuiButton: {
            styleOverrides: {
              root: { boxShadow: "none", "&:hover": { boxShadow: "none" } },
            },
          },
          MuiCard: {
            styleOverrides: {
              root: { boxShadow: "none", border: `1px solid ${colors.BORDER}` },
            },
          },
          MuiDrawer: {
            styleOverrides: {
              paper: { bgcolor: colors.SIDEBAR },
            },
          },
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
  if (!context) throw new Error("useAdminTheme must be used inside AdminThemeProvider");
  return context;
}
