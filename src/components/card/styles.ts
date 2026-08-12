import type { SxProps, Theme } from "@mui/material";

import type { CardVariant } from "./types";

const root = (variant: CardVariant, clickable = false): SxProps<Theme> => ({
  height: "100%",
  bgcolor: "background.paper",
  border: variant === "flat" ? "none" : "1px solid",
  borderColor: "divider",
  borderRadius: 1,
  overflow: "hidden",
  boxShadow: "none",
  transition:
    "transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease",

  cursor: variant === "interactive" ? "pointer" : "default",

  ...(variant === "interactive" && {
    "&:hover": {
      transform: "translateY(-3px)",
      borderColor: "secondary.main",
      boxShadow: "0 10px 24px rgba(0, 0, 0, 0.06)",
    },
  }),

  ...(clickable && {
    "&:focus-visible": {
      outline: "2px solid",
      outlineColor: "secondary.main",
      outlineOffset: 2,
    },
  }),
});

export default {
  root,
};