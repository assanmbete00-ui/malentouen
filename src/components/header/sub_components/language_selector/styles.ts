import type { SxProps, Theme } from "@mui/material";

const container: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  gap: 0.5,
  px: 1,
  height: 42,
  borderRadius: 999,
  color: "text.primary",
};

const button = (active: boolean): SxProps<Theme> => ({
  all: "unset",
  fontSize: 13,
  fontWeight: active ? 800 : 600,
  color: active ? "secondary.main" : "text.secondary",
  cursor: "pointer",
  transition: "color .25s ease",
  lineHeight: 1,

  "&:hover": {
    color: "secondary.main",
  },

  "&:focus-visible": {
    outline: "2px solid",
    outlineColor: "secondary.main",
    outlineOffset: 2,
    borderRadius: "2px",
  },
});

const separator: SxProps<Theme> = {
  color: "text.disabled",
  fontSize: 13,
  userSelect: "none",
  pointerEvents: "none",
};

export default {
  container,
  button,
  separator,
};