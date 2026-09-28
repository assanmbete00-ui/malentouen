import type { SxProps, Theme } from "@mui/material";

const container: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",

  gap: {
    xs: 3,
    md: 5,
  },

  minHeight: {
    xs: "auto",
    md: 520,
  },

  py: {
    xs: 1,
    md: 3,
  },
};

const content: SxProps<Theme> = {
  minWidth: 0,
};

const eyebrow: SxProps<Theme> = {
  display: "block",

  mt: {
    xs: 3,
    md: 8,
  },

  color: "secondary.main",

  fontSize: 12,
  fontWeight: 800,

  letterSpacing: "0.16em",
  textTransform: "uppercase",
};

const title: SxProps<Theme> = {
  maxWidth: 480,

  mt: 1.25,

  color: "primary.contrastText",

  fontSize: {
    xs: "1.8rem",
    sm: "2.15rem",
    md: "3.25rem",
  },

  lineHeight: {
    xs: 1.12,
    md: 1.08,
  },

  textWrap: "balance",
};

const description: SxProps<Theme> = {
  maxWidth: 440,

  mt: {
    xs: 1.5,
    md: 2.5,
  },

  color: "primary.contrastText",

  opacity: 0.82,

  fontSize: {
    xs: 14,
    sm: 15,
    md: 16,
  },

  lineHeight: {
    xs: 1.65,
    md: 1.8,
  },
};

const backLink: SxProps<Theme> = {
  width: "fit-content",
  color: "primary.contrastText",
};

export default {
  container,
  content,
  eyebrow,
  title,
  description,
  backLink,
};