import type { SxProps, Theme } from "@mui/material";

const grid: SxProps<Theme> = {
  display: "grid",
  gridTemplateColumns: {
    xs: "1fr",
    sm: "repeat(2, 1fr)",
    lg: "repeat(3, 1fr)",
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
  position: "relative",
  display: "block",
  overflow: "hidden",
  borderRadius: 2,
  minHeight: {
    xs: 260,
    md: 320,
  },
  textDecoration: "none",
  border: "1px solid",
  borderColor: "divider",
  boxShadow: "0 14px 34px rgba(0,0,0,0.06)",
  transition: "transform .35s ease, box-shadow .35s ease",
};

const image: SxProps<Theme> = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
  transition: "transform .5s ease",

  ".gallery-item:hover &": {
    transform: "scale(1.06)",
  },
};

const overlay: SxProps<Theme> = {
  position: "absolute",
  inset: 0,
  display: "flex",
  alignItems: "flex-end",
  p: 3,
  background: (theme) =>
    `linear-gradient(180deg, transparent 35%, ${theme.palette.primary.main}CC 100%) `,
};

const title: SxProps<Theme> = {
  color: "primary.contrastText",
  fontWeight: 900,
  fontSize: 18,
};

export default {
  grid,
  item,
  image,
  overlay,
  title,
};
