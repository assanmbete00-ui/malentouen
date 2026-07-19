import type { SxProps, Theme } from "@mui/material";

const container: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: 2,
  maxWidth: 720,
};

const description: SxProps<Theme> = {
  color: "text.secondary",
  lineHeight: 1.8,
  fontSize: {
    xs: 16,
    md: 17,
  },
};

export default {
  container,
  description,
};