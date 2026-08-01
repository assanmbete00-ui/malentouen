import type { SxProps, Theme } from "@mui/material";

const container: SxProps<Theme> = {
  px: 3,
  py: 2,
};

const button: SxProps<Theme> = {
  width: "100%",
  height: 46,
  borderRadius: "14px",
  fontWeight: 700,
};

export default {
  container,
  button,
};