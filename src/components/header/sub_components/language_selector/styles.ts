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

const language = (active: boolean): SxProps<Theme> => ({
  fontSize: 13,
  fontWeight: active ? 800 : 600,
  color: active ? "secondary.main" : "text.secondary",
  cursor: "pointer",
  transition: "all .25s ease",

  "&:hover": {
    color: "secondary.main",
  },
});

const separator: SxProps<Theme> = {
  color: "text.disabled",
  fontSize: 13,
};

export default {
  container,
  language,
  separator,
};