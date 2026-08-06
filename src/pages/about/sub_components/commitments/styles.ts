import type { SxProps, Theme } from "@mui/material";

const wrapper: SxProps<Theme> = {
  px: {
    xs: 4,
    md: 6,
    lg: 8,
  },

  py: {
    xs: 7,
    md: 8,
    lg: 9,
  },

  borderRadius: 4,

  bgcolor: "primary.main",

  overflow: "hidden",
};

const sectionTitle: SxProps<Theme> = {
  color: "primary.contrastText",

  "& .MuiTypography-root": {
    color: "inherit",
  },

  "& span": {
    color: "secondary.main",
  },
};

const grid: SxProps<Theme> = {
  display: "grid",

  gridTemplateColumns: {
    xs: "1fr",
    sm: "repeat(2,1fr)",
    xl: "repeat(4,1fr)",
  },

  gap: {
    xs: 3,
    md: 4,
  },

  mt: {
    xs: 5,
    md: 6,
  },
};

const card: SxProps<Theme> = {
  height: "100%",

  display: "flex",
  flexDirection: "column",

  gap: 2.5,

  p: {
    xs: 3,
    md: 4,
  },

  borderRadius: 3,

  bgcolor: "background.paper",
};

const title: SxProps<Theme> = {
  color: "primary.main",

  fontWeight: 700,

  lineHeight: 1.3,
};

const description: SxProps<Theme> = {
  color: "text.secondary",

  flex: 1,
};

export default {
  wrapper,
  sectionTitle,
  grid,
  card,
  title,
  description,
};