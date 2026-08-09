import type { SxProps, Theme } from "@mui/material";

const content: SxProps<Theme> = {
  display: "grid",
  gridTemplateColumns: {
    xs: "1fr",
    lg: "0.8fr 1.2fr",
  },

  alignItems: "center",
  gap: {
    xs: 5,
    md: 7,
    lg: 9,
  },
};

const editorial: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",

  maxWidth: 620,
};

const descriptions: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",

  gap: {
    xs: 2,
    md: 2.5,
  },

  mt: {
    xs: 2,
    md: 2.5,
  },
};

const description: SxProps<Theme> = {
  color: "text.secondary",
};

const accent: SxProps<Theme> = {
  width: 72,
  height: 3,

  mt: {
    xs: 4,
    md: 5,
  },

  borderRadius: 999,
  bgcolor: "secondary.main",
};

const media: SxProps<Theme> = {
  width: "100%",

  aspectRatio: {
    xs: "4 / 3",
    sm: "16 / 11",
    lg: "5 / 6",
  },

  borderRadius: 4,
  border: "1px solid",
  borderColor: "divider",
  bgcolor: "background.paper",
};

export default {
  content,
  editorial,
  descriptions,
  description,
  accent,
  media,
};