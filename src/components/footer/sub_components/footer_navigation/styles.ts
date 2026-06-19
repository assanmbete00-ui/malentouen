import type { SxProps, Theme } from "@mui/material";

const link: SxProps<Theme> = {
  color: "primary.contrastText",
  opacity: 0.82,
  textDecoration: "none",
  fontSize: 14,
  transition: "all .25s ease",

  "&:hover": {
    color: "secondary.main",
    pl: 0.5,
  },
};

export default {
  link,
};