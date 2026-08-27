import type { SxProps, Theme } from "@mui/material";
import type { TextLinkVariant } from "./types";

const root = (variant: TextLinkVariant): SxProps<Theme> => ({
  display: "inline-flex",
  alignItems: "center",
  width: "fit-content",
  gap: 0.8,

  color: variant === "inverse" ? "primary.contrastText" : "primary.main",
  fontSize: 15,
  fontWeight: 800,
  textDecoration: "none",

  transition: "all .25s ease",

  "&:hover": {
    color: "secondary.main",
    transform: "translateX(4px)",
  },
});

const arrow: SxProps<Theme> = {
  fontSize: 20,
  color: "secondary.main",
  transition: "inherit",
};

export default {
  root,
  arrow,
};
