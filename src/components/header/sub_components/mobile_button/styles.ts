import type { SxProps, Theme } from "@mui/material";

const button = (transparent: boolean): SxProps<Theme> => ({
  display: {
    xs: "inline-flex",
    lg: "none",
  },

  width: 44,
  height: 44,
  borderRadius: "50%",

  color: transparent ? "common.white" : "text.primary",
  bgcolor: transparent ? "rgba(255,255,255,0.12)" : "background.paper",

  border: "1px solid",
  borderColor: transparent ? "rgba(255,255,255,0.28)" : "divider",

  backdropFilter: transparent ? "blur(8px)" : "none",

  transition: "all .25s ease",

  "&:hover": {
    bgcolor: transparent ? "rgba(255,255,255,0.2)" : "action.hover",
    color: transparent ? "common.white" : "secondary.main",
  },

  "&:focus-visible": {
    outline: "2px solid",
    outlineColor: transparent ? "common.white" : "secondary.main",
    outlineOffset: 2,
  },
});

export default {
  button,
};