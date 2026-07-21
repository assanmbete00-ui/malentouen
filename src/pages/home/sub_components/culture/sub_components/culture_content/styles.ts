import type { SxProps, Theme } from "@mui/material";

const container: SxProps<Theme> = {
  width: "100%",
  textAlign: "left",
};

const description: SxProps<Theme> = {
  mt: 2.5,
  maxWidth: 760,
  color: "text.secondary",
  lineHeight: 1.85,
  fontSize: {
    xs: 16,
    md: 17,
  },
};

export default {
  container,
  description,
};