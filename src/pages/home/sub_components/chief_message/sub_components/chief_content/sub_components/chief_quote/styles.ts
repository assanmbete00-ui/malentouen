import type { SxProps, Theme } from "@mui/material";

const container: SxProps<Theme> = {
  position: "relative",

  maxWidth: 620,

  mb: {
    xs: 3,
    md: 4,
  },

  py: "4px",
  pl: {
    xs: "20px",
    md: "24px",
  },

  borderLeft: "3px solid",
  borderColor: "secondary.main",
};

const quote: SxProps<Theme> = {
  color: "text.primary",

  fontSize: {
    xs: 20,
    md: 23,
  },

  fontStyle: "italic",
  fontWeight: 700,
  lineHeight: 1.45,
};

export default {
  container,
  quote,
};