import type { SxProps, Theme } from "@mui/material";

const container: SxProps<Theme> = {
  width: "100%",

  minHeight: {
    xs: 320,
    md: 380,
    lg: 440,
  },

  overflow: "hidden",

  border: "1px solid",
  borderColor: "divider",
  borderRadius: "18px",

  bgcolor: "background.paper",
};

const map: SxProps<Theme> = {
  width: "100%",
  height: "100%",
  minHeight: "inherit",

  display: "block",
  border: 0,
};

export default {
  container,
  map,
};