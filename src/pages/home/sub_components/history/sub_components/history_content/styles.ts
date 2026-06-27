import type { SxProps, Theme } from "@mui/material";

const container: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  maxWidth: 620,
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

const action: SxProps<Theme> = {
  mt: 4,
};

export default {
  container,
  description,
  action,
};