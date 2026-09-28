import type { SxProps, Theme } from "@mui/material";

const container = (transparent: boolean): SxProps<Theme> => ({
  display: "flex",
  alignItems: "center",
  gap: 0.5,
  px: 1,
  height: 42,
  borderRadius: 999,
  color: transparent ? "common.white" : "text.primary",
  transition: "color .3s ease",
});

const button = (
  active: boolean,
  transparent: boolean,
): SxProps<Theme> => ({
  all: "unset",
  fontSize: 13,
  fontWeight: active ? 800 : 600,
  color: transparent
    ? active
      ? "secondary.light"
      : "rgba(255,255,255,0.82)"
    : active
      ? "secondary.main"
      : "text.secondary",
  cursor: "pointer",
  transition: "color .25s ease",
  lineHeight: 1,

  "&:hover": {
    color: transparent ? "common.white" : "secondary.main",
  },

  "&:focus-visible": {
    outline: "2px solid",
    outlineColor: transparent ? "common.white" : "secondary.main",
    outlineOffset: 2,
    borderRadius: "2px",
  },
});

const separator = (transparent: boolean): SxProps<Theme> => ({
  color: transparent ? "rgba(255,255,255,0.45)" : "text.disabled",
  fontSize: 13,
  userSelect: "none",
  pointerEvents: "none",
});

export default {
  container,
  button,
  separator,
};