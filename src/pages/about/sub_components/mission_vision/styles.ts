import type { SxProps, Theme } from "@mui/material";

const content: SxProps<Theme> = {
  display: "grid",

  gridTemplateColumns: {
    xs: "1fr",
    lg: "repeat(2, minmax(0, 1fr))",
  },

  gap: {
    xs: 3,
    md: 4,
    lg: 5,
  },

  alignItems: "stretch",

  mb: {
    xs: 5,
    md: 7,
  },
};

const block: SxProps<Theme> = {
  height: "100%",
  bgcolor: "background.paper",
};

const blockContent: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  height: "100%",

  gap: {
    xs: 2,
    md: 2.5,
  },

  p: {
    xs: 3,
    md: 4,
  },

  "&:last-child": {
    pb: {
      xs: 3,
      md: 4,
    },
  },
};

const blockTitle: SxProps<Theme> = {
  position: "relative",
  color: "primary.main",

  "&::after": {
    content: '""',
    display: "block",
    width: 40,
    height: 3,
    mt: 2,
    borderRadius: 999,
    bgcolor: "secondary.main",
  },
};

const blockDescription: SxProps<Theme> = {
  color: "text.secondary",
};

const imageWrapper: SxProps<Theme> = {
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
    md: "16 / 8",
  },

  objectFit: "cover",
  objectPosition: "center",
};

export default {
  content,
  block,
  blockContent,
  blockTitle,
  blockDescription,
  imageWrapper,
  image,
};