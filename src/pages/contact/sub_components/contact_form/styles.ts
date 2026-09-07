import type { SxProps, Theme } from "@mui/material";

const layout: SxProps<Theme> = {
  display: "grid",
  gridTemplateColumns: {
    xs: "1fr",
    md: "0.85fr 1.15fr",
  },
  gap: {
    xs: 4,
    md: 8,
  },
  alignItems: "start",
};

const intro: SxProps<Theme> = {
  position: {
    xs: "static",
    md: "sticky",
  },
  top: {
    md: 140,
  },
};

const form: SxProps<Theme> = {
  display: "grid",
  gap: {
    xs: 2.5,
    md: 3,
  },
  minWidth: 0,
};

const row: SxProps<Theme> = {
  display: "grid",
  gridTemplateColumns: {
    xs: "1fr",
    sm: "repeat(2, minmax(0, 1fr))",
  },
  gap: {
    xs: 2.5,
    md: 3,
  },
};

const actions: SxProps<Theme> = {
  display: "flex",
  justifyContent: "flex-start",
  pt: 1,
};

const submitButton: SxProps<Theme> = {
  minHeight: 48,
  minWidth: {
    xs: "100%",
    sm: 180,
  },
};

export default {
  layout,
  intro,
  form,
  row,
  actions,
  submitButton,
};