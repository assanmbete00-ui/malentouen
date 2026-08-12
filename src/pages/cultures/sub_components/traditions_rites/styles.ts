import type { SxProps, Theme } from "@mui/material";

const content: SxProps<Theme> = {
  display: "grid",
  gridTemplateColumns: {
    xs: "1fr",
    lg: "1.15fr 0.85fr",
  },

  gap: {
    xs: 4,
    md: 5,
    lg: 6,
  },
};

const featured: SxProps<Theme> = {
  position: "relative",

  minHeight: {
    xs: 480,
    sm: 560,
    lg: 680,
  },

  overflow: "hidden",
  borderRadius: 1.5,
};

const featuredMedia: SxProps<Theme> = {
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
};

const featuredOverlay: SxProps<Theme> = {
  position: "absolute",
  inset: 0,
  zIndex: 1,

  background: (theme) =>
    `linear-gradient(
      180deg,
      transparent 28%,
      ${theme.palette.primary.dark}F2 100%
    )`,
};

const featuredContent: SxProps<Theme> = {
  position: "absolute",
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 2,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",

  p: {
    xs: 3,
    sm: 4,
    md: 5,
  },
};

const featuredCategory: SxProps<Theme> = {
  color: "secondary.main",
  fontSize: 12,
  fontWeight: 800,
  letterSpacing: ".12em",
  textTransform: "uppercase",
};

const featuredTitle: SxProps<Theme> = {
  maxWidth: 620,
  mt: 1.5,
  color: "primary.contrastText",
};

const featuredDescription: SxProps<Theme> = {
  maxWidth: 680,
  mt: 2,
  color: "primary.contrastText",
  opacity: 1,
};

const secondary: SxProps<Theme> = {
  display: "grid",

  gridTemplateColumns: {
    xs: "1fr",
    sm: "repeat(2, minmax(0, 1fr))",
    lg: "1fr",
  },

  gap: {
    xs: 3,
    md: 4,
  },
};

const secondaryCard: SxProps<Theme> = {
  height: "100%",
};

export default {
  content,
  featured,
  featuredMedia,
  featuredOverlay,
  featuredContent,
  featuredCategory,
  featuredTitle,
  featuredDescription,
  secondary,
  secondaryCard,
};