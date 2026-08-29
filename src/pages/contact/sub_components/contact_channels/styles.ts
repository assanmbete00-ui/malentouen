import type { SxProps, Theme } from "@mui/material";

const grid: SxProps<Theme> = {
  display: "grid",
  gridTemplateColumns: {
    xs: "1fr",
    sm: "repeat(2, 1fr)",
    md: "repeat(3, 1fr)",
  },
  gap: 3,
  mt: { xs: 4, md: 5 },
};

const card: SxProps<Theme> = {
  height: "100%",
  p: { xs: 3, md: 4 },
};

const iconBox: SxProps<Theme> = {
  width: 48,
  height: 48,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 2,
  bgcolor: "primary.main",
  color: "primary.contrastText",
  mb: 3,
};

const icon: SxProps<Theme> = {
  fontSize: 25,
};

const label: SxProps<Theme> = {
  mb: 1,
  color: "text.secondary",
  fontSize: "0.875rem",
  fontWeight: 600,
};

const value: SxProps<Theme> = {
  color: "text.primary",
  fontWeight: 600,
  lineHeight: 1.6,
  overflowWrap: "anywhere",
};

const link: SxProps<Theme> = {
  color: "inherit",
  textDecoration: "none",

  "&:hover": {
    color: "primary.main",
  },

  "&:focus-visible": {
    outline: "2px solid",
    outlineColor: "primary.main",
    outlineOffset: 4,
    borderRadius: 1,
  },
};

export default {
  grid,
  card,
  iconBox,
  icon,
  label,
  value,
  link,
};