import type { SxProps, Theme } from "@mui/material";

const container: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  maxWidth: 760,
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

const actionWrapper: SxProps<Theme> = {
  mt: 4,
};

export default {
  container,
  description,
  actionWrapper,
};