import type { SxProps, Theme } from "@mui/material";

import type { SectionVariant } from "./types";

const root = (variant: SectionVariant): SxProps<Theme> => ({
  width: "100%",

  py: {
    xs: 7,
    md: 9,
    lg: 11,
  },

  bgcolor:
    variant === "primary"
      ? "primary.main"
      : variant === "paper"
      ? "background.paper"
      : "background.default",

  color:
    variant === "primary"
      ? "primary.contrastText"
      : "text.primary",
});

const content: SxProps<Theme> = {
  width: "100%",
};

export default {
  root,
  content,
};