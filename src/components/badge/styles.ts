import type { SxProps, Theme } from "@mui/material";

import type { BadgeVariant } from "./types";

const root = (variant: BadgeVariant): SxProps<Theme> => ({
  display: "inline-flex",
  alignItems: "center",
  width: "fit-content",

  minHeight: 34,
  px: 2,
  borderRadius: 999,

  fontSize: 12,
  fontWeight: 800,
  letterSpacing: "0.12em",
  textTransform: "uppercase",

  ...(variant === "primary" && {
    bgcolor: "primary.main",
    color: "primary.contrastText",
  }),

  ...(variant === "secondary" && {
    bgcolor: "secondary.main",
    color: "primary.main",
  }),

  ...(variant === "outline" && {
    bgcolor: "transparent",
    color: "primary.contrastText",
    border: "1px solid",
    borderColor: "secondary.main",
  }),
});

export default {
  root,
};