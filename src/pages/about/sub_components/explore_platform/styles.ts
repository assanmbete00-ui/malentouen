import type { SxProps, Theme } from "@mui/material";

const grid: SxProps<Theme> = {
  display: "grid",

  gridTemplateColumns: {
    xs: "1fr",
    sm: "repeat(2, minmax(0, 1fr))",
    lg: "repeat(3, minmax(0, 1fr))",
  },

  gap: {
    xs: 3,
    md: 4,
  },
};

const card: SxProps<Theme> = {
  height: "100%",
};

const content: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",

  height: "100%",

  p: {
    xs: 3,
    md: 4,
  },
};

const title: SxProps<Theme> = {
  color: "text.primary",
};

const description: SxProps<Theme> = {
  mt: 1.5,
  mb: 3,

  color: "text.secondary",
};

const link: SxProps<Theme> = {
  mt: "auto",
  color: "primary.main",
};

export default {
  grid,
  card,
  content,
  title,
  description,
  link,
};