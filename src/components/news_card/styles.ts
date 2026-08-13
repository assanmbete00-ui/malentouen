import type { SxProps, Theme } from "@mui/material";

const link: SxProps<Theme> = {
  display: "block",
  height: "100%",
  color: "inherit",
  textDecoration: "none",

  "&:focus-visible": {
    outline: "2px solid",
    outlineColor: "secondary.main",
    outlineOffset: 3,
    borderRadius: 1,
  },
};

const imageWrapper: SxProps<Theme> = {
  width: "100%",
  aspectRatio: "16 / 10",
  overflow: "hidden",
};

const image: SxProps<Theme> = {
  width: "100%",
  height: "100%",
  display: "block",
  transition: "transform .45s ease",

  ".MuiCard-root:hover &": {
    transform: "scale(1.03)",
  },
};

const content: SxProps<Theme> = {
  p: { xs: 2.5, md: 3 },
};

const meta: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  gap: 1,
};

const category: SxProps<Theme> = {
  color: "secondary.dark",
  fontSize: 12,
  fontWeight: 900,
  letterSpacing: ".12em",
  textTransform: "uppercase",
};

const date: SxProps<Theme> = {
  color: "text.secondary",
  fontSize: 13,
  fontWeight: 700,
};

const title: SxProps<Theme> = {
  mt: 1.5,
  color: "text.primary",
  fontSize: 20,
  fontWeight: 900,
  lineHeight: 1.35,

  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 2,
  overflow: "hidden",
};

const description: SxProps<Theme> = {
  mt: 1.5,
  color: "text.secondary",
  fontSize: 15,
  lineHeight: 1.8,

  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 3,
  overflow: "hidden",
};

export default {
  link,
  imageWrapper,
  image,
  content,
  meta,
  category,
  date,
  title,
  description,
};