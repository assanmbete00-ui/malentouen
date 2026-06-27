import type { SxProps, Theme } from "@mui/material";

const root: SxProps<Theme> = {
  position: "absolute",
  inset: 0,

  zIndex: 1,

  background: (theme) =>
    `linear-gradient(
      90deg,
      ${theme.palette.primary.main}E6 0%,
      ${theme.palette.primary.main}B3 45%,
      ${theme.palette.primary.main}66 100%
    )`,
};

export default {
  root,
};