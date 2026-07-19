import type { SxProps, Theme } from "@mui/material";

const container: SxProps<Theme> = {
  position: "relative",
  mb: 4,
  py: "8px",
  pl: "32px",
  borderLeft: "4px solid",
  borderColor: "secondary.main",
  maxWidth: 720,
  /* simple vertical bar only */
};

const quote: SxProps<Theme> = {
  fontSize: {
    xs: 20,
    md: 26,
  },
  fontStyle: "italic",
  fontWeight: 700,
  lineHeight: 1.55,
  color: "text.primary",
  /* use system/inter typography (no Playfair) */
};

export default {
  container,
  quote,
};
