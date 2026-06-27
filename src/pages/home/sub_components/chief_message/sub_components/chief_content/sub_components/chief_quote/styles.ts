import type { SxProps, Theme } from "@mui/material";

const container: SxProps<Theme> = {
  position: "relative",

  mt: 4,
  mb: 4,

  pl: 4,

  borderLeft: "4px solid",

  borderColor: "secondary.main",
};

const quote: SxProps<Theme> = {
  fontSize: {
    xs: 20,
    md: 26,
  },

  fontStyle: "italic",

  fontWeight: 500,

  lineHeight: 1.8,

  color: "text.primary",
};

export default {
  container,
  quote,
};