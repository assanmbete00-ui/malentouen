import type { SxProps, Theme } from "@mui/material";

const root: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  gap: 1,
};

const item: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  gap: .5,
};

const itemWrapper: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
};

const link: SxProps<Theme> = {
  color: "text.secondary",
  textDecoration: "none",
  transition: "color .2s ease",

  "&:hover": {
    color: "primary.main",
  },
};

const linkText: SxProps<Theme> = {
  color: "inherit",
};

const current: SxProps<Theme> = {
  color: "text.primary",
  fontWeight: 700,
};

const separator: SxProps<Theme> = {
  color: "text.disabled",
  mx: .5,
  userSelect: "none",
};

export default {
  root,
  item,
  itemWrapper,
  link,
  linkText,
  current,
  separator,
};