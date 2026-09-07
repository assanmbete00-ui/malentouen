import type { SxProps, Theme } from "@mui/material";

const grid: SxProps<Theme> = {
  display: "grid",
  gridTemplateColumns: {
    xs: "1fr",
    md: "repeat(3, 1fr)",
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
  position: "relative",
  px: { xs: 0, md: 3 },
  py: { xs: 2, md: 0 },
  "& + &": {
    borderTop: { xs: "1px solid", md: "none" },
    borderColor: "divider",
    pt: { xs: 3, md: 0 },
  },
  "@media (min-width: 900px)": {
    "& + &": {
      borderLeft: "1px solid",
      borderColor: "divider",
    },
  },
};

const number: SxProps<Theme> = {
  color: "primary.main",
  fontWeight: 700,
  fontSize: "1.1rem",
  letterSpacing: "0.08em",
  mb: 2,
};

const title: SxProps<Theme> = {
  fontSize: {
    xs: "1.1rem",
    md: "1.25rem",
  },
  fontWeight: 700,
  mb: 1.5,
};

const description: SxProps<Theme> = {
  fontSize: "0.95rem",
  color: "text.secondary",
  lineHeight: 1.6,
};

export default {
  grid,
  item,
  number,
  title,
  description,
};
