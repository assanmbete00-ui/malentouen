import type { SxProps, Theme } from "@mui/material";

const container: SxProps<Theme> = {
  display: "grid",

  gap: {
    xs: 2.25,
    md: 2.5,
  },
};

const item: SxProps<Theme> = {
  position: "relative",

  pl: {
    xs: 2.5,
    md: 3,
  },

  py: 0.25,

  borderLeft: "3px solid",
  borderColor: "secondary.main",
};

const period: SxProps<Theme> = {
  color: "secondary.main",

  fontSize: {
    xs: 12,
    md: 13,
  },

  fontWeight: 700,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
};

const title: SxProps<Theme> = {
  mt: 0.5,

  color: "text.primary",

  fontSize: {
    xs: 15,
    md: 16,
  },

  fontWeight: 700,
  lineHeight: 1.45,
};

export default {
  container,
  item,
  period,
  title,
};