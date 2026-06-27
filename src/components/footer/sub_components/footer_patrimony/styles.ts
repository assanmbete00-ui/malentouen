import type { SxProps, Theme } from "@mui/material";

const link: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  width: "fit-content",

  color: "primary.contrastText",
  opacity: 0.78,

  textDecoration: "none",

  fontSize: 14,
  fontWeight: 500,

  transition: "all .25s ease",

  "&:hover": {
    color: "secondary.main",
    opacity: 1,
    transform: "translateX(4px)",
  },
};

const icon: SxProps<Theme> = {
  fontSize: 18,
  mr: 0.4,
  color: "secondary.main",
  transition: "inherit",
};

export default {
  link,
  icon,
};