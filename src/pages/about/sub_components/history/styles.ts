import type {
  SxProps,
  Theme,
} from "@mui/material";

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
  display: "block",

  borderRadius: 4,

  aspectRatio: {
    xs: "4 / 3",
    md: "16 / 8",
  },

  objectFit: "cover",
};

const introduction: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: 3,
};

const description: SxProps<Theme> = {
  color: "text.secondary",
};

const chapters: SxProps<Theme> = {
  mt: {
    xs: 6,
    md: 8,
  },

  display: "flex",
  flexDirection: "column",
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