import type { SxProps, Theme } from "@mui/material";

const root: SxProps<Theme> = {
  position: "relative",
  width: "100%",
  minHeight: {
    xs: "56vh",
    md: "60vh",
    lg: "64vh",
  },
  overflow: "hidden",
  isolation: "isolate",
};

const contentWrapper: SxProps<Theme> = {
  position: "relative",
  zIndex: 2,
  width: "100%",
  minHeight: {
    xs: "56vh",
    md: "60vh",
    lg: "64vh",
  },
  display: "flex",
  alignItems: "center",
};

const contentInner: SxProps<Theme> = {
  width: "100%",
  maxWidth: "1440px",
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