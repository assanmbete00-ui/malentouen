import { createTheme } from "@mui/material/styles";

import {
  BACKGROUND,
  BORDER,
  ERROR,
  INFO,
  PRIMARY,
  PRIMARY_HOVER,
  SECONDARY,
  SECONDARY_HOVER,
  SUCCESS,
  SURFACE,
  TEXT_DISABLED,
  TEXT_PRIMARY,
  TEXT_SECONDARY,
  WARNING,
  WHITE,
} from "./colors";

const theme = createTheme({
  palette: {
    primary: {
      main: PRIMARY,
      dark: PRIMARY_HOVER,
      contrastText: WHITE,
    },
    secondary: {
      main: SECONDARY,
      dark: SECONDARY_HOVER,
      contrastText: WHITE,
    },
    background: {
      default: BACKGROUND,
      paper: SURFACE,
    },
    text: {
      primary: TEXT_PRIMARY,
      secondary: TEXT_SECONDARY,
      disabled: TEXT_DISABLED,
    },
    success: {
      main: SUCCESS,
    },
    warning: {
      main: WARNING,
    },
    error: {
      main: ERROR,
    },
    info: {   
      main: INFO,
    },
    divider: BORDER,
  },

  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 900,
      letterSpacing: "-0.03em",
      lineHeight: 1.05,
    },
    h2: {
      fontWeight: 900,
      letterSpacing: "-0.03em",
      lineHeight: 1.1,
    },
    h3: {
      fontWeight: 900,
      lineHeight: 1.15,
    },
    h4: {
      fontWeight: 800,
      lineHeight: 1.2,
    },
    h5: {
      fontWeight: 700,
      lineHeight: 1.3,
    },
    h6: {
      fontWeight: 700,
      lineHeight: 1.35,
    },
    body1: {
      lineHeight: 1.85,
      letterSpacing: "0.01em",
    },
    body2: {
      lineHeight: 1.8,
      letterSpacing: "0.01em",
    },
    button: {
      fontWeight: 700,
      textTransform: "none",
    },
  },

  shape: {
    borderRadius: 14,
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 14,
          boxShadow: "none",
          transition: "transform .2s ease, box-shadow .2s ease",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          border: `1px solid ${BORDER}`,
          transition: "transform .25s ease, box-shadow .25s ease",
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: "lg",
      },
    },
  },
});

export default theme;
