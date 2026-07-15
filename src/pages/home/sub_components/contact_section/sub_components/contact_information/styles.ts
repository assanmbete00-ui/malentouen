import type { SxProps, Theme } from "@mui/material";

const grid: SxProps<Theme> = {
  display: "grid",
  gridTemplateColumns: {
    xs: "1fr",
    sm: "repeat(2, 1fr)",
  },
  gap: 3,
};

const item: SxProps<Theme> = {
  display: "flex",
  gap: 2,
  p: 3,
  borderRadius: 3,
  bgcolor: "background.paper",
  border: "1px solid",
  borderColor: "divider",
  transition: "all .25s ease",

  "&:hover": {
    transform: "translateY(-4px)",
    borderColor: "secondary.main",
  },
};

const iconBox: SxProps<Theme> = {
  width: 44,
  height: 44,
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  bgcolor: "primary.main",
  color: "primary.contrastText",
  flexShrink: 0,
};

const label: SxProps<Theme> = {
  fontWeight: 900,
  color: "text.primary",
};

const value: SxProps<Theme> = {
  mt: 0.8,
  color: "text.secondary",
  lineHeight: 1.6,
};

export default {
  grid,
  item,
  iconBox,
  label,
  value,
};