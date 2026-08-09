import { alpha } from "@mui/material/styles";

import type {
  SxProps,
  Theme,
} from "@mui/material";

const root: SxProps<Theme> = {
  position: "relative",
  isolation: "isolate",
  overflow: "hidden",

  display: "flex",
  alignItems: "flex-end",

  minHeight: {
    xs: 320,
    sm: 380,
    md: 460,
    lg: 500,
  },

  bgcolor: "primary.dark",
};

const background = (
  _position: string,
): SxProps<Theme> => ({
  position: "absolute",
  inset: 0,
  zIndex: -3,

  width: "100%",
  height: "100%",

  pointerEvents: "none",
  userSelect: "none",
});

const overlay: SxProps<Theme> = {
  position: "absolute",
  inset: 0,
  zIndex: -2,

  background: (theme) =>
    `linear-gradient(
      90deg,
      ${alpha(
        theme.palette.primary.dark,
        0.96,
      )} 0%,
      ${alpha(
        theme.palette.primary.dark,
        0.82,
      )} 48%,
      ${alpha(
        theme.palette.primary.dark,
        0.5,
      )} 100%
    )`,
};

const depthOverlay: SxProps<Theme> = {
  position: "absolute",
  inset: 0,
  zIndex: -1,

  background: (theme) =>
    `linear-gradient(
      180deg,
      ${alpha(
        theme.palette.primary.dark,
        0.08,
      )} 0%,
      ${alpha(
        theme.palette.primary.dark,
        0.58,
      )} 100%
    )`,
};

const container: SxProps<Theme> = {
  width: "100%",

  py: {
    xs: 5,
    sm: 6,
    md: 8,
    lg: 9,
  },
};

const content: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",

  width: "100%",
  maxWidth: 820,
};

const breadcrumb: SxProps<Theme> = {
  mb: {
    xs: 3,
    md: 4,
  },

  "& a": {
    color: (theme) =>
      alpha(
        theme.palette.primary.contrastText,
        0.76,
      ),

    "&:hover": {
      color: "secondary.main",
    },
  },

  "& a span": {
    color: "inherit",
  },

  "& > div:last-of-type span": {
    color: (theme) =>
      alpha(
        theme.palette.primary.contrastText,
        0.96,
      ),
  },
};

const eyebrow: SxProps<Theme> = {
  display: "inline-block",

  mb: 1.5,

  color: "secondary.main",

  fontSize: {
    xs: 12,
    md: 14,
  },

  fontWeight: 800,
  lineHeight: 1.4,
  letterSpacing: ".18em",
  textTransform: "uppercase",
};

const title: SxProps<Theme> = {
  maxWidth: 800,

  color: "primary.contrastText",

  fontSize: {
    xs: "2rem",
    sm: "2.5rem",
    md: "3.25rem",
    lg: "3.75rem",
  },

  textWrap: "balance",
};

const description: SxProps<Theme> = {
  maxWidth: 700,

  mt: {
    xs: 2,
    md: 2.5,
  },

  color: (theme) =>
    alpha(
      theme.palette.primary.contrastText,
      0.82,
    ),

  fontSize: {
    xs: 15,
    sm: 16,
    md: 17,
  },
};

const children: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",

  gap: 2,

  mt: {
    xs: 3,
    md: 4,
  },
};

export default {
  root,
  background,
  overlay,
  depthOverlay,
  container,
  content,
  breadcrumb,
  eyebrow,
  title,
  description,
  children,
};