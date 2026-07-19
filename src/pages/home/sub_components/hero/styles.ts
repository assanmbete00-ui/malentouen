import type { SxProps, Theme } from "@mui/material";

const root: SxProps<Theme> = {
  position: "relative",
  width: "100%",
  minHeight: {
    xs: "60vh",
    md: "68vh",
    lg: "72vh",
  },
  overflow: "hidden",
  isolation: "isolate",
  display: "flex",
  alignItems: "center",
};

const contentWrapper: SxProps<Theme> = {
  position: "relative",
  zIndex: 2,
  width: "100%",
  minHeight: {
    xs: "60vh",
    md: "68vh",
    lg: "72vh",
  },
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  pt: {
    xs: 6,
    md: 8,
  },
  pb: {
    xs: 6,
    md: 8,
  },
};

const contentInner: SxProps<Theme> = {
  width: "100%",
  maxWidth: "1320px",
  mx: "auto",
  px: {
    xs: 2,
    sm: 3,
    md: 5,
    lg: 7,
  },
};

export default {
  root,
  contentWrapper,
  contentInner,
};
