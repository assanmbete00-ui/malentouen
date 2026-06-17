import type { SxProps, Theme } from "@mui/material";

const container = (bgColor?: "primary" | "secondary"): SxProps<Theme> => ({
  position: "relative",
  display: "flex",
  width: "100%",
  minHeight: "100vh",
  overflowX: "hidden",
  overflowY: "auto",
  bgcolor: bgColor === "primary" ? "primary.main" : "background.default",
});

export default {
  container,
};
