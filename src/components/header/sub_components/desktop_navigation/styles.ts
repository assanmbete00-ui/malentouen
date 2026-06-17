import type { SxProps, Theme } from "@mui/material";

const container: SxProps<Theme> = {
  display: { xs: "none", lg: "flex" },
  alignItems: "center",
  justifyContent: "center",
  gap: 0.4,
  flex: 1,
};

export default {
  container,
};