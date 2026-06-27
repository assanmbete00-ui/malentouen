import type { SxProps, Theme } from "@mui/material";

const container: SxProps<Theme> = {
  maxWidth: 760,
  mx: "auto",
  textAlign: "center",
};

const description: SxProps<Theme> = {
  mt: 3,
  color: "text.secondary",
  lineHeight: 1.9,
  fontSize: {
    xs: 16,
    md: 17,
  },
};

export default {
  container,
  description,
};