import type { SxProps, Theme } from "@mui/material";

const container: SxProps<Theme> = {
  position: "relative",
  width: "100%",

  mt: 0,

  mb: {
    xs: 5,
    md: 6,
  },

  borderRadius: 1.5,
  overflow: "hidden",

  height: {
    xs: 360,
    md: 430,
  },

  boxShadow: "0 24px 60px rgba(0, 0, 0, 0.12)",
};

const image: SxProps<Theme> = {
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
};

const overlay: SxProps<Theme> = {
  position: "absolute",
  inset: 0,
  background:
    "linear-gradient(90deg, rgba(0,0,0,.72), rgba(0,0,0,.28))",
};

const content: SxProps<Theme> = {
  position: "relative",
  zIndex: 1,

  width: "100%",
  height: "100%",

  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",

  p: {
    xs: 4,
    md: 6,
  },
};

const title: SxProps<Theme> = {
  maxWidth: 520,

  color: "primary.contrastText",

  fontWeight: 800,

  fontSize: {
    xs: 30,
    md: 34,
  },

  lineHeight: 1.15,
};

const description: SxProps<Theme> = {
  mt: 2,
  maxWidth: 520,

  color: "primary.contrastText",
  opacity: 0.95,

  fontSize: 16,
  lineHeight: 1.85,
};

const actionWrapper: SxProps<Theme> = {
  mt: 3,
};

export default {
  container,
  image,
  overlay,
  content,
  title,
  description,
  actionWrapper,
};