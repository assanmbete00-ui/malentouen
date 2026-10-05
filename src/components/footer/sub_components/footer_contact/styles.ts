import type { SxProps, Theme } from "@mui/material";

const item: SxProps<Theme> = {
  display: "flex",
  alignItems: "flex-start",

  gap: 1.1,

  width: "fit-content",

  color: "primary.contrastText",
  opacity: 0.82,

  fontSize: 14,
  lineHeight: 1.6,

  textDecoration: "none",

  transition: "color .2s ease, opacity .2s ease, transform .2s ease",

  "&:hover": {
    opacity: 1,
    color: "secondary.main",
    transform: "translateX(2px)",
  },

  "&:focus-visible": {
    outline: "2px solid",
    outlineColor: "secondary.main",
    outlineOffset: 2,
  },
};

const icon: SxProps<Theme> = {
  mt: 0.15,
  fontSize: 18,
  color: "secondary.main",
  flexShrink: 0,
};

export default {
  item,
  icon,
};