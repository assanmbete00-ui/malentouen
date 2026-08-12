import type { SxProps, Theme } from "@mui/material";

const grid: SxProps<Theme> = {
  display: "grid",

  gridTemplateColumns: {
    xs: "1fr",
    sm: "repeat(2, minmax(0, 1fr))",
    lg: "repeat(4, minmax(0, 1fr))",
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

const iconWrapper: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 52,
  height: 52,
  mb: 3,
  borderRadius: 1,
  bgcolor: "background.default",
  color: "secondary.main",
};

const icon: SxProps<Theme> = {
  fontSize: 28,
};

const title: SxProps<Theme> = {
  color: "text.primary",
};

const description: SxProps<Theme> = {
  mt: 2,
  color: "text.secondary",
};

export default {
  grid,
  card,
  content,
  iconWrapper,
  icon,
  title,
  description,
};