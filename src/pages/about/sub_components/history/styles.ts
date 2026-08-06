import type { SxProps, Theme } from "@mui/material";

const hero: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",

  gap: {
    xs: 4,
    md: 5,
  },
};

const image: SxProps<Theme> = {
  width: "100%",

  aspectRatio: {
    xs: "4 / 3",
    sm: "16 / 10",
    md: "16 / 8",
  },

  border: "1px solid",
  borderColor: "divider",
  borderRadius: 4,
};

const introduction: SxProps<Theme> = {
  display: "grid",

  gridTemplateColumns: {
    xs: "1fr",
    lg: "repeat(2, minmax(0, 1fr))",
  },

  gap: {
    xs: 2.5,
    lg: 6,
  },
};

const description: SxProps<Theme> = {
  color: "text.secondary",
};

const chapters: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",

  mt: {
    xs: 6,
    md: 8,
  },

  gap: {
    xs: 5,
    md: 7,
  },
};

const chapter: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",

  gap: 2,

  maxWidth: 920,
};

const separator: SxProps<Theme> = {
  width: 72,
  height: 3,

  mb: 2,

  borderRadius: 999,
  bgcolor: "secondary.main",
};

const chapterTitle: SxProps<Theme> = {
  color: "text.primary",
};

const chapterDescription: SxProps<Theme> = {
  maxWidth: 860,
  color: "text.secondary",
};

export default {
  hero,
  image,
  introduction,
  description,
  chapters,
  chapter,
  separator,
  chapterTitle,
  chapterDescription,
};