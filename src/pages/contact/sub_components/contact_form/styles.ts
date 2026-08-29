import type { SxProps, Theme } from "@mui/material";

const layout: SxProps<Theme> = {
  display: "grid",
  gridTemplateColumns: {
    xs: "1fr",
    md: "0.85fr 1.15fr",
  },
  gap: { xs: 5, md: 8 },
  alignItems: "start",
};

const intro: SxProps<Theme> = {
  position: { md: "sticky" },
  top: { md: 140 },
};

const form: SxProps<Theme> = {
  display: "grid",
  gap: 3,
};

const row: SxProps<Theme> = {
  display: "grid",
  gridTemplateColumns: {
    xs: "1fr",
    sm: "repeat(2, 1fr)",
  },
  gap: 3,
};

const actions: SxProps<Theme> = {
  display: "flex",
  justifyContent: "flex-start",
  pt: 1,
};

export default {
  layout,
  intro,
  form,
  row,
  actions,
};