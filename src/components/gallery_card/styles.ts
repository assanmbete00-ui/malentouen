import type { SxProps, Theme } from "@mui/material";

const link: SxProps<Theme> = {
  display: "block",
  height: "100%",
  textDecoration: "none",
  color: "inherit",
};

const card: SxProps<Theme> = {
  position: "relative",
  minHeight: 0,

  aspectRatio: {
    xs: "4 / 3",
    sm: "3 / 4",
    lg: "4 / 5",
  },
};

const media: SxProps<Theme> = {
  position: "absolute",
  inset: 0,
  overflow: "hidden",
};

const image: SxProps<Theme> = {
  width: "100%",
  height: "100%",
  display: "block",
  objectFit: "cover",
  transition: "transform 0.45s ease",

  ".MuiCard-root:hover &": {
    transform: "scale(1.03)",
  },
};

const overlay: SxProps<Theme> = {
  position: "absolute",
  inset: 0,
  zIndex: 1,

  display: "flex",
  alignItems: "flex-end",

  p: {
    xs: 2.5,
    md: 3,
  },

  background: (theme) =>
    `linear-gradient(
      180deg,
      transparent 38%,
      ${theme.palette.primary.main}E6 100%
    )`,
};

const title: SxProps<Theme> = {
  maxWidth: "90%",
  color: "primary.contrastText",

  fontSize: {
    xs: 17,
    md: 18,
  },

  fontWeight: 800,
  lineHeight: 1.35,

  textShadow: "0 2px 12px rgba(0, 0, 0, 0.28)",
};

export default {
  link,
  card,
  media,
  image,
  overlay,
  title,
};