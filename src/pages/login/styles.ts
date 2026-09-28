import type { SxProps, Theme } from "@mui/material";

const root: SxProps<Theme> = {
  minHeight: "100vh",

  display: "flex",
  flexDirection: "column",

  bgcolor: "background.default",
};

const layout: SxProps<Theme> = {
  width: "100%",

  maxWidth: 1180,

  mx: "auto",

  px: {
    xs: 2,
    sm: 3,
    md: 6,
  },

  py: {
    xs: 2,
    sm: 3,
    md: 7,
  },

  display: "grid",

  gridTemplateColumns: {
    xs: "1fr",
    md: "minmax(0, 1fr) minmax(0, 1fr)",
  },

  gap: {
    xs: 3,
    sm: 4,
    md: 9,
  },

  alignItems: {
    xs: "stretch",
    md: "center",
  },

  flex: 1,
};

const branding: SxProps<Theme> = {
  minWidth: 0,

  px: {
    xs: 2,
    sm: 3,
    md: 4,
  },

  py: {
    xs: 2.5,
    sm: 3,
    md: 5,
  },

  borderRadius: {
    xs: 2,
    md: 0,
  },

  bgcolor: "primary.main",
};

const form: SxProps<Theme> = {
  minWidth: 0,

  px: {
    xs: 0,
    sm: 1,
    md: 0,
  },

  py: {
    xs: 1,
    sm: 2,
    md: 0,
  },
};

export default {
  root,
  layout,
  branding,
  form,
};