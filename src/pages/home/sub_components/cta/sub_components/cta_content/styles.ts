import type { SxProps, Theme } from "@mui/material";

const container: SxProps<Theme> = {
  maxWidth: 820,
  mx: "auto",
  textAlign: "center",
};

const title: SxProps<Theme> = {
  color: "primary.contrastText",
  fontWeight: 800,
  lineHeight: 1.2,

  fontSize: {
    xs: 32,
    md: 44,
  },
};

const description: SxProps<Theme> = {
  mt: 3,
  color: "primary.contrastText",
  opacity: .9,
  lineHeight: 1.8,

  fontSize: {
    xs: 16,
    md: 18,
  },
};

export default {
  container,
  title,
  description,
};