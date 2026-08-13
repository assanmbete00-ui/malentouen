import type { SxProps, Theme } from "@mui/material";

const container: SxProps<Theme> = {
  px: 3,
  py: 2,
  borderTop: "1px solid",
  borderBottom: "1px solid",
  borderColor: "divider",
};

const title: SxProps<Theme> = {
  mb: 1.5,
  fontWeight: 700,
  color: "text.primary",
};

const item = (active: boolean): SxProps<Theme> => ({
  all: "unset",
  display: "flex",
  alignItems: "center",
  width: "100%",
  py: 1,
  cursor: "pointer",
  color: active ? "secondary.main" : "text.secondary",
  fontWeight: active ? 700 : 500,
  fontSize: "inherit",
  transition: "color .2s ease",

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

export default {
  container,
  title,
  item,
};