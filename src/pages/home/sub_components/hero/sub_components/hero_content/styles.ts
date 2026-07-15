import type { SxProps, Theme } from "@mui/material";

const container: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  maxWidth: 760,
  gap: 3,
  py: {
    xs: 4,
    md: 6,
  },
  pr: {
    xs: 2,
    md: 0,
  },
};

const title: SxProps<Theme> = {
  mt: 3,
  color: "primary.contrastText",
  fontWeight: 900,
  fontSize: {
    xs: "2.6rem",
    sm: "3.4rem",
    md: "4.6rem",
    lg: "5.2rem",
  },
  lineHeight: 1.03,
  letterSpacing: "-0.04em",
  maxWidth: 880,
};

const description: SxProps<Theme> = {
  mt: 2.5,
  color: "primary.contrastText",
  opacity: 0.88,
  fontSize: {
    xs: 15,
    md: 17,
  },
  lineHeight: 1.95,
  maxWidth: 640,
};

export default {
  container,
  title,
  description,
};
