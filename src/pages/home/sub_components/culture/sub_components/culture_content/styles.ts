import type { SxProps, Theme } from "@mui/material";

const container: SxProps<Theme> = {
  width: "100%",
  maxWidth: 1120,
  mx: 0,
  textAlign: "left",
  mb: 0,
};

const description: SxProps<Theme> = {
  mt: 2.5,
  maxWidth: 760,
  color: "text.secondary",
  lineHeight: 1.85,
  fontSize: 16,
};

export default {
  container,
  description,
};
