import type { SxProps, Theme } from "@mui/material";

const container: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  maxWidth: 760,
};

const title: SxProps<Theme> = {
  mt: 3,
  color: "primary.contrastText",
  fontWeight: 900,
  fontSize: {
    xs: "2.4rem",
    sm: "3.2rem",
    md: "4.4rem",
    lg: "5rem",
  },
  lineHeight: 1.05,
  letterSpacing: "-0.03em",
  maxWidth: 900,
};

const description: SxProps<Theme> = {
  mt: 2.5,
  color: "primary.contrastText",
  opacity: 0.92,
  fontSize: {
    xs: 16,
    md: 19,
  },
  lineHeight: 1.8,
  maxWidth: 620,
};

export default {
  container,
  title,
  description,
};