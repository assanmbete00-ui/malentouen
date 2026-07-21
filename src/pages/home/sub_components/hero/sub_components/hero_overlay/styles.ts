import type { SxProps, Theme } from "@mui/material";

const root: SxProps<Theme> = {
  position: "absolute",
  inset: 0,
  zIndex: 1,

  background: (theme) => `
    linear-gradient(
      90deg,
      ${theme.palette.primary.dark}E8 0%,
      ${theme.palette.primary.main}C2 30%,
      ${theme.palette.primary.main}73 56%,
      ${theme.palette.primary.main}26 78%,
      transparent 100%
    ),
    linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.04) 45%,
      rgba(35, 24, 20, 0.52) 100%
    )
  `,
};

export default {
  root,
};