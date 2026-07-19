import type { SxProps, Theme } from "@mui/material";

const grid: SxProps<Theme> = {
  display: "grid",
  gridTemplateColumns: {
    xs: "1fr",
    sm: "repeat(2, 1fr)",
    lg: "repeat(4, 1fr)",
  },
  gap: {
    xs: 2,
    md: 3,
  },
  mt: {
    xs: 5,
    md: 6,
  },
};

const item: SxProps<Theme> = {
  minHeight: 170,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 2,
  px: 4,
  py: 5,
  borderRadius: 14,
  bgcolor: "background.paper",
  border: "1px solid",
  borderColor: "divider",
  textDecoration: "none",
  color: "inherit",
  transition: "all .25s ease, transform .25s ease, box-shadow .25s ease",
  boxShadow: "0 12px 28px rgba(0,0,0,0.05)",

  "&:hover": {
    transform: "translateY(-4px)",
    borderColor: "secondary.main",
    boxShadow: "0 18px 36px rgba(0,0,0,0.08)",
  },
};

const logo: SxProps<Theme> = {
  maxWidth: 120,
  maxHeight: 48,
  objectFit: "contain",
  filter: "grayscale(1)",
  opacity: 0.75,
  transition: "all .25s ease",

  ".partner-item:hover &": {
    filter: "grayscale(0)",
    opacity: 1,
  },
};

const name: SxProps<Theme> = {
  fontWeight: 800,
  textAlign: "center",
  color: "text.primary",
};

const type: SxProps<Theme> = {
  mt: 0.5,
  color: "text.secondary",
  fontSize: 13,
  fontWeight: 500,
  textAlign: "center",
};

export default {
  grid,
  item,
  logo,
  name,
  type,
};
