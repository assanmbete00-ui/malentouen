import type { SxProps, Theme } from "@mui/material";

const root: SxProps<Theme> = {
  position: "absolute",
  inset: 0,
  zIndex: 1,
  background: (theme) =>
    `linear-gradient(
      180deg,
      rgba(248,246,242,0.02) 0%,
      ${theme.palette.primary.main}B0 35%,
      ${theme.palette.primary.main}D4 80%,
      ${theme.palette.primary.main}F0 100%
    )`,
};

export default {
  root,
};
