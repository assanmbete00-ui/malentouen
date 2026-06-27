import type { SxProps, Theme } from "@mui/material";

import type { ContainerSize } from "./types";

const maxWidths: Record<ContainerSize, string> = {
  narrow: "960px",
  default: "1280px",
  wide: "1440px",
  full: "1920px",
};

const root = (size: ContainerSize): SxProps<Theme> => ({
  width: "100%",
  maxWidth: maxWidths[size],
  mx: "auto",
  px: {
    xs: 2,
    sm: 3,
    md: 4,
    lg: 5,
  },
});

export default {
  root,
};