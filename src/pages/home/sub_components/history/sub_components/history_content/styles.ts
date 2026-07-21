import type { SxProps, Theme } from "@mui/material";

const container: SxProps<Theme> = {
  width: "100%",
  maxWidth: 620,

  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
};

const description: SxProps<Theme> = {
  mt: {
    xs: 3,
    md: 3.5,
  },

  color: "text.secondary",

  fontSize: {
    xs: 15,
    md: 16,
  },

  lineHeight: 1.8,
};

const description2: SxProps<Theme> = {
  mt: {
    xs: 2.25,
    md: 2.5,
  },

  color: "text.secondary",

  fontSize: {
    xs: 15,
    md: 16,
  },

  lineHeight: 1.8,
};

const action: SxProps<Theme> = {
  mt: {
    xs: 2.75,
    md: 3,
  },
};

export default {
  container,
  description,
  description2,
  action,
};