import type { SxProps, Theme } from "@mui/material";

const list: SxProps<Theme> = {
  width: "100%",

  borderBottom: "1px solid",
  borderColor: "divider",
};

const item: SxProps<Theme> = {
  display: "grid",

  gridTemplateColumns: {
    xs: "1fr",
    lg: "0.9fr 1.1fr",
  },

  gap: {
    xs: 3,
    md: 5,
    lg: 8,
  },

  alignItems: "start",

  py: {
    xs: 4,
    md: 5,
  },

  borderTop: "1px solid",
  borderColor: "divider",
};

const heading: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",

  gap: {
    xs: 2,
    md: 2.5,
  },
};

const title: SxProps<Theme> = {
  maxWidth: 520,

  color: "text.primary",
};

const description: SxProps<Theme> = {
  maxWidth: 680,

  color: "text.secondary",
};

export default {
  list,
  item,
  heading,
  title,
  description,
};