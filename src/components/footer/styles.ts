import type { SxProps, Theme } from "@mui/material";

const root: SxProps<Theme> = {
  bgcolor: "primary.main",
  color: "primary.contrastText",
  pt: { xs: 5, md: 7 },
  px: { xs: 2, md: 4, lg: 5 },
};

const inner: SxProps<Theme> = {
  width: "100%",
  maxWidth: "1920px",
  mx: "auto",
};

const grid: SxProps<Theme> = {
  display: "grid",
  gridTemplateColumns: {
    xs: "1fr",
    md: "1.4fr 1fr 1fr 1fr",
  },
  gap: { xs: 4, md: 5 },
};

export default {
  root,
  inner,
  grid,
};