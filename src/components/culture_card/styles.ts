import type { SxProps, Theme } from "@mui/material";

const link: SxProps<Theme> = {
  display: "block",
  height: "100%",
  textDecoration: "none",
  color: "inherit",

  "&:focus-visible": {
    outline: "2px solid",
    outlineColor: "secondary.main",
    outlineOffset: 2,
    borderRadius: 1,
  },
};

const imageWrapper: SxProps<Theme> = {
  position: "relative",
  width: "100%",
  aspectRatio: {
    xs: "4 / 3",
    sm: "16 / 10",
  },
  overflow: "hidden",
};

const image: SxProps<Theme> = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
  transition: "opacity .35s ease",
};

const content: SxProps<Theme> = {
  p: 3,
};

const category: SxProps<Theme> = {
  color: "secondary.main",
  fontSize: 12,
  fontWeight: 900,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
};

const title: SxProps<Theme> = {
  mt: 1.2,
  color: "text.primary",
  fontSize: 18,
  fontWeight: 800,
  lineHeight: 1.35,
};

const description: SxProps<Theme> = {
  mt: 1.5,
  color: "text.secondary",
  fontSize: 15,
  lineHeight: 1.75,
};

export default {
  link,
  imageWrapper,
  image,
  content,
  category,
  title,
  description,
};
