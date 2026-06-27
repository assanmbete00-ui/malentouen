import type { SxProps, Theme } from "@mui/material";

import type { CardVariant } from "./types";

const root = (variant: CardVariant): SxProps<Theme> => ({
  height: "100%",
  bgcolor: "background.paper",
  border: variant === "flat" ? "none" : "1px solid",
  borderColor: "divider",
  borderRadius: 2,
  overflow: "hidden",
  boxShadow: "none",
  transition: "all .25s ease",
  cursor: variant === "interactive" ? "pointer" : "default",

  ...(variant === "interactive" && {
    "&:hover": {
      transform: "translateY(-4px)",
      borderColor: "secondary.main",
    },
  }),
});

export default {
  root,
};