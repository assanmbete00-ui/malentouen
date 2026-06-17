import { createTheme } from "@mui/material/styles";

import {
  BACKGROUND,
  BORDER,
  ERROR,
  INFO,
  PRIMARY,
  PRIMARY_HOVER,
  SECONDARY,
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
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 700,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
    button: {
      fontWeight: 600,
      textTransform: "none",
    },
  },

  shape: {
    borderRadius: 12,
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          boxShadow: "none",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          border: `1px solid ${BORDER}`,
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
