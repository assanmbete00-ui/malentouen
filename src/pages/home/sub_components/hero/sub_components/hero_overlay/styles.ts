import { alpha } from "@mui/material/styles";
import type { SxProps, Theme } from "@mui/material";

const root: SxProps<Theme> = {
  position: "absolute",
  inset: 0,
  zIndex: 1,

  background: (theme) => `
    linear-gradient(
      90deg,
      ${alpha(theme.palette.primary.dark, 0.9)} 0%,
      ${alpha(theme.palette.primary.dark, 0.72)} 32%,
      ${alpha(theme.palette.primary.main, 0.46)} 58%,
      ${alpha(theme.palette.primary.main, 0.18)} 78%,
      ${alpha(theme.palette.primary.main, 0.04)} 100%
    ),
    linear-gradient(
      180deg,
      ${alpha(theme.palette.primary.dark, 0.2)} 0%,
      ${alpha(theme.palette.primary.dark, 0.06)} 38%,
      ${alpha(theme.palette.primary.dark, 0.12)} 68%,
      ${alpha(theme.palette.primary.dark, 0.46)} 100%
    )
  `,

  pointerEvents: "none",
};

export default {
  root,
};