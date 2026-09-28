import type { SxProps, Theme } from "@mui/material";

const root = (
  isTransparent: boolean,
  showShadow: boolean,
): SxProps<Theme> => ({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1200,
  width: "100%",

  bgcolor: isTransparent ? "transparent" : "background.paper",

  boxShadow: !isTransparent && showShadow ? 2 : "none",

  transition: (theme) =>
    theme.transitions.create(["background-color", "box-shadow"], {
      duration: 300,
      easing: theme.transitions.easing.easeInOut,
    }),
});

const main = (
  isCompact: boolean,
  isTransparent: boolean,
): SxProps<Theme> => ({
  height: isCompact ? 72 : 88,

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  px: {
    xs: 2,
    md: 4,
    lg: 5,
  },

  borderBottom: "1px solid",
  borderColor: isTransparent ? "transparent" : "divider",

  transition: (theme) =>
    theme.transitions.create(
      ["height", "border-color", "background-color"],
      {
        duration: 300,
        easing: theme.transitions.easing.easeInOut,
      },
    ),
});

const left: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  flexShrink: 0,
};

const center: SxProps<Theme> = {
  flex: 1,
  display: "flex",
  justifyContent: "center",
};

const right: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
};

export default {
  root,
  main,
  left,
  center,
  right,
};