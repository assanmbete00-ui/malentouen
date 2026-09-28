import { alpha } from "@mui/material/styles";
import type { SxProps, Theme } from "@mui/material";

import type { LogoVariant } from "./types";

const container = (
  variant: LogoVariant,
  transparent: boolean,
): SxProps<Theme> => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: variant === "footer" ? "flex-start" : "center",

  width: variant === "footer" ? "100%" : "fit-content",
  maxWidth: "100%",

  p:
    transparent && variant !== "footer"
      ? {
          xs: 0.4,
          md: 0.5,
        }
      : 0,

  borderRadius: 1.5,

  bgcolor:
    transparent && variant !== "footer"
      ? (theme) => alpha(theme.palette.common.white, 0.9)
      : "transparent",

  backdropFilter:
    transparent && variant !== "footer"
      ? "blur(8px)"
      : "none",

  textDecoration: "none",

  transition: (theme) =>
    theme.transitions.create(
      ["background-color", "opacity", "padding"],
      {
        duration: 300,
        easing: theme.transitions.easing.easeInOut,
      },
    ),

  "&:hover": {
    opacity: 0.94,
  },

  "&:focus-visible": {
    outline: "2px solid",
    outlineColor: "secondary.main",
    outlineOffset: 3,
  },
});

const image = (variant: LogoVariant): SxProps<Theme> => ({
  display: "block",

  width:
    variant === "compact"
      ? {
          xs: 145,
          md: 165,
        }
      : variant === "footer"
        ? {
            xs: 260,
            sm: 300,
            md: 340,
            lg: 360,
          }
        : {
            xs: 185,
            sm: 205,
            md: 225,
            lg: 240,
          },

  height: "auto",
  maxWidth: "100%",

  objectFit: "contain",

  flexShrink: 0,
  userSelect: "none",
  pointerEvents: "none",
});

export default {
  container,
  image,
};