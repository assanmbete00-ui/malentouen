import type { SxProps, Theme } from "@mui/material";
import type { SectionSpacing, SectionVariant } from "./types";

const spacings: Record<SectionSpacing, SxProps<Theme>> = {
  compact: {
    py: { xs: 5, md: 6, lg: 7 },
  },
  default: {
    py: { xs: 7, md: 8, lg: 9 },
  },
  spacious: {
    py: { xs: 8, md: 10, lg: 11 },
  },
};

const root = (
  variant: SectionVariant,
  spacing: SectionSpacing,
): SxProps<Theme> => ({
  width: "100%",
  ...spacings[spacing],

  bgcolor:
    variant === "primary"
      ? "primary.main"
      : variant === "secondary"
        ? "secondary.main"
        : variant === "paper"
          ? "background.paper"
          : "background.default",

  color:
    variant === "primary"
      ? "primary.contrastText"
      : variant === "secondary"
        ? "secondary.contrastText"
        : "text.primary",
});

export default {
  root,
};