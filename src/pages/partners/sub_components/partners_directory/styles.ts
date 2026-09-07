import type { SxProps, Theme } from "@mui/material";

const grid: SxProps<Theme> = {
  display: "grid",
  gridTemplateColumns: {
    xs: "1fr",
    sm: "repeat(2, 1fr)",
    md: "repeat(5, minmax(0, 1fr))",
  },
  gap: {
    xs: 2,
    md: 3,
  },
  mt: {
    xs: 3,
    md: 4,
  },
};

const item: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  minWidth: 0,
};

const logo: SxProps<Theme> = {
  width: "100%",
  height: {
    xs: 96,
    md: 118,
  },
  objectFit: "contain",
  mb: 2,
};

const name: SxProps<Theme> = {
  fontSize: {
    xs: "0.95rem",
    sm: "1rem",
  },
  fontWeight: 600,
  mb: 0.5,
};

const type: SxProps<Theme> = {
  fontSize: "0.85rem",
  color: "text.secondary",
};

export default {
  grid,
  item,
  logo,
  name,
  type,
};
