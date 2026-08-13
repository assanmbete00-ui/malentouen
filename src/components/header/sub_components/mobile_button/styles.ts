import type { SxProps, Theme } from "@mui/material";

const button: SxProps<Theme> = {
  display: {
    xs: "inline-flex",
    lg: "none",
  },
  width: 44,
  height: 44,
  borderRadius: "50%",
  color: "text.primary",
  bgcolor: "background.paper",
  border: "1px solid",
  borderColor: "divider",

  "&:hover": {
    bgcolor: "action.hover",
    color: "secondary.main",
  },

  "&:focus-visible": {
    outline: "2px solid",
    outlineColor: "secondary.main",
    outlineOffset: 2,
  },
};

export default {
  button,
};