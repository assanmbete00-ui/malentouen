import type { SxProps, Theme } from "@mui/material";

const link: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  width: "fit-content",

  color: "primary.contrastText",
  opacity: 0.82,

  fontSize: 14,
  fontWeight: 500,
  lineHeight: 1.6,

  textDecoration: "none",

  transition: "color .2s ease, opacity .2s ease, transform .2s ease",

  "&:hover": {
    color: "secondary.main",
    opacity: 1,
    transform: "translateX(2px)",
  },

  "&:focus-visible": {
    outline: "2px solid",
    outlineColor: "secondary.main",
    outlineOffset: 2,
  },
};

const icon: SxProps<Theme> = {
  fontSize: 16,
  mr: 0.4,
  color: "secondary.main",
};

export default {
  link,
  icon,
};