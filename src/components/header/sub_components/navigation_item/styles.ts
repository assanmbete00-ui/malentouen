import { alpha } from "@mui/material";
import type { SxProps, Theme } from "@mui/material";

import { SECONDARY } from "@constants/colors";
import type { NavigationItemVariant } from "./types";

const item = (
  active: boolean,
  variant: NavigationItemVariant,
  transparent = false,
): SxProps<Theme> => {
  const isDesktop = variant === "desktop";
  const isMobile = variant === "mobile";
  const isFooter = variant === "footer";

  return {
    position: "relative",
    display: "flex",
    alignItems: "center",

    minHeight: isDesktop ? 44 : isMobile ? 48 : "auto",

    px: isDesktop ? 1.4 : isMobile ? 2 : 0,
    py: isDesktop ? 0 : isMobile ? 1 : 0.5,

    borderRadius: isDesktop ? 999 : isMobile ? 2 : 0,

    color:
      transparent && isDesktop
        ? "common.white"
        : active && !isFooter
          ? "secondary.main"
          : isFooter
            ? "inherit"
            : "text.primary",

    fontSize: isDesktop ? 14 : isMobile ? 15 : 14,

    fontWeight: active && !isFooter ? 800 : isFooter ? 500 : 600,

    textDecoration: "none",
    whiteSpace: "nowrap",

    transition: (theme) =>
      theme.transitions.create(["color", "background-color", "opacity"], {
        duration: 250,
        easing: theme.transitions.easing.easeInOut,
      }),

    "&:hover": {
      color:
        transparent && isDesktop
          ? "common.white"
          : "secondary.main",

      bgcolor:
        transparent && isDesktop
          ? "rgba(255, 255, 255, 0.12)"
          : isDesktop
            ? alpha(SECONDARY, 0.08)
            : isMobile
              ? alpha(SECONDARY, 0.12)
              : "transparent",
    },

    "&:focus-visible": {
      outline: "2px solid",
      outlineColor:
        transparent && isDesktop
          ? "common.white"
          : "secondary.main",
      outlineOffset: 2,
    },

    ...(active &&
      isDesktop && {
        "&::after": {
          content: '""',
          position: "absolute",
          left: "50%",
          bottom: 2,
          transform: "translateX(-50%)",
          width: 22,
          height: 2,
          borderRadius: 999,
          bgcolor: transparent ? "common.white" : "secondary.main",
        },
      }),

    ...(active &&
      isMobile && {
        bgcolor: alpha(SECONDARY, 0.14),
      }),
  };
};

export default {
  item,
};