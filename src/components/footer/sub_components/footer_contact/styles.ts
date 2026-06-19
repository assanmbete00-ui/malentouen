import type { SxProps, Theme } from "@mui/material";

const item: SxProps<Theme> = {
  display: "flex",
  alignItems: "flex-start",
  gap: 1,
  color: "primary.contrastText",
  opacity: 0.82,
  fontSize: 14,
  lineHeight: 1.7,
};

const icon: SxProps<Theme> = {
  mt: 0.3,
  fontSize: 18,
  color: "secondary.main",
  flexShrink: 0,
};

export default {
  item,
  icon,
};