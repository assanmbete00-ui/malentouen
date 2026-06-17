import type { SxProps, Theme } from "@mui/material";

const container: SxProps<Theme> = {
  display: {
    xs: "none",
    lg: "flex",
  },
  alignItems: "center",
  gap: 1,
  ml: 2,
};

export default {
  container,
};