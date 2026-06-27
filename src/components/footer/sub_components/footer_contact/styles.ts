import type { SxProps, Theme } from "@mui/material";

const item: SxProps<Theme> = {
  display: "flex",
  alignItems: "flex-start",
  gap: 1.8,
  width: "fit-content",
  color: "primary.contrastText",
  opacity: 0.78,
  fontSize: 14,
  lineHeight: 1.7,
  textDecoration: "none",
  transition: "all .25s ease",

  "&:hover": {
    opacity: 1,
    color: "secondary.main",
    transform: "translateX(4px)",
  },
};

const icon: SxProps<Theme> = {
  mt: 0.25,
  fontSize: 20,
  color: "secondary.main",
  flexShrink: 0,
};

export default {
  item,
  icon,
};