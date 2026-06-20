import type { SxProps, Theme } from "@mui/material";

const root: SxProps<Theme> = {
  bgcolor: "primary.main",
  color: "primary.contrastText",
  pt: { xs: 5, md: 5.5 },
  px: { xs: 2, md: 4, lg: 5 },
};

const inner: SxProps<Theme> = {
  width: "100%",
  maxWidth: "1920px",
  mx: "auto",
};

const main: SxProps<Theme> = {
  display: "grid",
  gridTemplateColumns: {
    xs: "1fr",
    lg: "2fr 1fr 1fr 1.2fr",
  },
  alignItems: "flex-start",
  gap: { xs: 5, md: 7, lg: 10 },
};

export default {
  root,
  inner,
  main,
};