import type { SxProps, Theme } from "@mui/material";

const content: SxProps<Theme> = {
  display: "grid",
  gap: 3,
  maxWidth: 820,
  margin: "0 auto",
};

const footer: SxProps<Theme> = {
  display: "flex",
  justifyContent: "flex-start",
};

export default {
  content,
  footer,
};
