import type { SxProps, Theme } from "@mui/material";

const container: SxProps<Theme> = {
  maxWidth: 820,
  mx: "auto",
};

const description: SxProps<Theme> = {
  mt: {
    xs: 3,
    md: 4,
  },
  maxWidth: 760,
  mx: "auto",
  color: "text.secondary",
  fontSize: {
    xs: 16,
    md: 17,
  },
  lineHeight: 1.8,
  textAlign: "center",
};

export default {
  container,
  description,
};
