import type { SxProps, Theme } from "@mui/material";

const container: SxProps<Theme> = {
  display: "flex",

  flexDirection: {
    xs: "column",
    sm: "row",
  },

  justifyContent: "center",
  alignItems: "center",

  flexWrap: "wrap",

  gap: {
    xs: 0.75,
    sm: 1.5,
  },

  width: "100%",

  px: {
    xs: 2.5,
    sm: 4,
  },

  py: {
    xs: 2.5,
    sm: 3,
  },

  color: "text.secondary",

  fontSize: "0.75rem",

  textAlign: "center",
};

const link: SxProps<Theme> = {
  color: "text.secondary",

  textDecoration: "none",

  "&:hover": {
    textDecoration: "underline",
  },

  "&:focus-visible": {
    outline: "2px solid",
    outlineColor: "secondary.main",
    outlineOffset: 3,
  },
};

export default {
  container,
  link,
};