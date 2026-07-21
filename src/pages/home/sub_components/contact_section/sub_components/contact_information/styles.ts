import type { SxProps, Theme } from "@mui/material";

const grid: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",

  borderTop: "1px solid",
  borderBottom: "1px solid",
  borderColor: "divider",
};

const item: SxProps<Theme> = {
  display: "grid",
  gridTemplateColumns: "44px minmax(0, 1fr)",
  alignItems: "flex-start",

  gap: {
    xs: 2,
    md: 2.5,
  },

  py: {
    xs: 2.5,
    md: 3,
  },

  borderBottom: "1px solid",
  borderColor: "divider",

  "&:last-of-type": {
    borderBottom: "none",
  },
};

const iconBox: SxProps<Theme> = {
  width: 40,
  height: 40,

  borderRadius: "50%",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  bgcolor: "primary.main",
  color: "primary.contrastText",

  flexShrink: 0,
};

const label: SxProps<Theme> = {
  color: "text.primary",
  fontSize: 14,
  fontWeight: 800,
  lineHeight: 1.4,
};

const value: SxProps<Theme> = {
  mt: 0.65,

  color: "text.secondary",

  fontSize: {
    xs: 14,
    md: 15,
  },

  lineHeight: 1.65,
  overflowWrap: "anywhere",
};

export default {
  grid,
  item,
  iconBox,
  label,
  value,
};