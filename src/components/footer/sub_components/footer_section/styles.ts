import type { SxProps, Theme } from "@mui/material";

const container: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
};

const title: SxProps<Theme> = {
  position: "relative",
  display: "inline-block",
  width: "fit-content",

  mb: 2,

  fontSize: 14,
  fontWeight: 800,

  color: "primary.contrastText",

  textTransform: "uppercase",
  letterSpacing: "0.1em",

  "&::after": {
    content: '""',
    position: "absolute",
    left: 0,
    bottom: -7,

    width: 28,
    height: 2,

    borderRadius: 999,
    bgcolor: "secondary.main",
  },
};

const content: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: 0.65,
};

export default {
  container,
  title,
  content,
};