import type { SxProps, Theme } from "@mui/material";

const media: SxProps<Theme> = {
  width: "100%",
  overflow: "hidden",

  borderRadius: 4,
  border: "1px solid",
  borderColor: "divider",

  bgcolor: "background.paper",
};

const image: SxProps<Theme> = {
  display: "block",
  width: "100%",

  aspectRatio: {
    xs: "4 / 3",
    sm: "16 / 10",
    md: "16 / 7",
  },

  objectFit: "cover",
  objectPosition: "center",
};

const content: SxProps<Theme> = {
  display: "grid",

  gridTemplateColumns: {
    xs: "1fr",
    lg: "repeat(2, minmax(0, 1fr))",
  },

  mt: {
    xs: 5,
    md: 7,
  },

  gap: {
    xs: 5,
    lg: 0,
  },
};

const block: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",

  px: {
    xs: 0,
    lg: 6,
  },

  py: {
    xs: 0,
    lg: 1,
  },

  "&:first-of-type": {
    pl: {
      lg: 0,
    },
  },
};

const visionBlock: SxProps<Theme> = {
  borderLeft: {
    xs: "none",
    lg: "1px solid",
  },

  borderColor: {
    lg: "divider",
  },

  pr: {
    lg: 0,
  },
};

const accent: SxProps<Theme> = {
  width: 56,
  height: 3,

  mb: 3,

  borderRadius: 999,
  bgcolor: "secondary.main",
};

const blockTitle: SxProps<Theme> = {
  maxWidth: 520,
  color: "text.primary",
};

const descriptions: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",

  gap: 2.5,

  mt: 3,
};

const blockDescription: SxProps<Theme> = {
  color: "text.secondary",
};

export default {
  media,
  image,
  content,
  block,
  visionBlock,
  accent,
  blockTitle,
  descriptions,
  blockDescription,
};