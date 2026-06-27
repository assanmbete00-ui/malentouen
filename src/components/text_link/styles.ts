import type { SxProps, Theme } from "@mui/material";

const root: SxProps<Theme> = {
  display: "inline-flex",
  alignItems: "center",
  width: "fit-content",
  gap: 0.8,

  color: "primary.contrastText",
  fontSize: 15,
  fontWeight: 800,
  textDecoration: "none",

  transition: "all .25s ease",

  "&:hover": {
    color: "secondary.main",
    transform: "translateX(4px)",
  },
};

const arrow: SxProps<Theme> = {
  fontSize: 20,
  color: "secondary.main",
  transition: "inherit",
};

export default {
  root,
  arrow,
};