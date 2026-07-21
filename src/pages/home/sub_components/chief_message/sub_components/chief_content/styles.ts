import type { SxProps, Theme } from "@mui/material";

const container: SxProps<Theme> = {
  width: "100%",
  maxWidth: 640,

  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",

  gap: 0,
};

const sectionTitle: SxProps<Theme> = {
  mb: {
    xs: 3,
    md: 4,
  },

  "& h2": {
    fontSize: {
      xs: 36,
      md: 52,
      lg: 56,
    },

    lineHeight: 1.08,
    letterSpacing: "-0.03em",
    fontWeight: 900,
  },
};

const description: SxProps<Theme> = {
  maxWidth: 620,

  color: "text.secondary",

  fontSize: {
    xs: 16,
    md: 17,
  },

  lineHeight: 1.8,
  letterSpacing: "0.01em",
  whiteSpace: "pre-line",

  mb: {
    xs: 2.5,
    md: 3,
  },
};

const description2: SxProps<Theme> = {
  maxWidth: 620,

  color: "text.secondary",

  fontSize: {
    xs: 16,
    md: 17,
  },

  lineHeight: 1.8,
  letterSpacing: "0.01em",
  whiteSpace: "pre-line",

  mb: 0,
};

const actionWrapper: SxProps<Theme> = {
  mt: 3,
};

export default {
  container,
  sectionTitle,
  description,
  description2,
  actionWrapper,
};