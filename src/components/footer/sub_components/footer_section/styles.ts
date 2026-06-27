import type { SxProps, Theme } from "@mui/material";

const container: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: 2,
};

const title: SxProps<Theme> = {
  position: "relative",
  display: "inline-block",
  width: "fit-content",

  fontSize: 16,
  fontWeight: 800,
  color: "primary.contrastText",
  textTransform: "uppercase",
  letterSpacing: "0.08em",

  mb: 2.2,

  "&::after": {
    content: '""',
    position: "absolute",
    left: 0,
    bottom: -6,
    width: 34,
    height: 2,
    borderRadius: 999,
    bgcolor: "secondary.main",
  },
};

const content: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: 1,
};

export default {
  container,
  title,
  content,
};