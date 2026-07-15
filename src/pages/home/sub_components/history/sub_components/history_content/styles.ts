import type { SxProps, Theme } from "@mui/material";

const container: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  maxWidth: 620,
};

const description: SxProps<Theme> = {
  mt: 3.5,
  color: "text.secondary",
  lineHeight: 1.85,
  fontSize: 16,
};

const description2: SxProps<Theme> = {
  mt: 3,
  color: "text.secondary",
  lineHeight: 1.85,
  fontSize: 16,
};

const action: SxProps<Theme> = {
  mt: 3.5,
};

export default {
  container,
  description,
  description2,
  action,
};
