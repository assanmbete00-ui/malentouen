import type { SxProps, Theme } from "@mui/material";

import type { NavigationItemVariant } from "./types";

const item = (
  active: boolean,
  variant: NavigationItemVariant
): SxProps<Theme> => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  minHeight: variant === "desktop" ? 44 : 48,
  px: variant === "desktop" ? 1.4 : 2,
  py: variant === "desktop" ? 0 : 1,
  borderRadius: variant === "desktop" ? 999 : 2,
  color: active ? "secondary.main" : "text.primary",
  fontSize: variant === "desktop" ? 14 : 15,
  fontWeight: active ? 800 : 600,
  textDecoration: "none",
  whiteSpace: "nowrap",
  transition: "all 0.25s ease",

  "&:hover": {
    color: "secondary.main",
    bgcolor:
      variant === "desktop"
        ? "rgba(200, 155, 60, 0.08)"
        : "rgba(200, 155, 60, 0.12)",
  },

  ...(active &&
    variant === "desktop" && {
      "&::after": {
        content: '""',
        position: "absolute",
        left: "50%",
        bottom: 2,
        transform: "translateX(-50%)",
        width: 22,
        height: 2,
        borderRadius: 999,
        bgcolor: "secondary.main",
      },
    }),

  ...(active &&
    variant === "mobile" && {
      bgcolor: "rgba(200, 155, 60, 0.14)",
    }),
});

export default {
  item,
};