import type { SxProps, Theme } from "@mui/material";

const container: SxProps<Theme> = {
  mt: 5,

  display: "flex",

  flexDirection: "column",

  gap: 0.5,
};

const name: SxProps<Theme> = {
  fontWeight: 800,

  color: "text.primary",

  fontSize: 18,
};

const title: SxProps<Theme> = {
  color: "text.secondary",

  fontSize: 15,
};

export default {
  container,
  name,
  title,
};