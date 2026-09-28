import type { SxProps, Theme } from "@mui/material";

const container: SxProps<Theme> = {
  mt: 4,
  pt: 2.25,

  borderTop: "1px solid",
  borderColor: "rgba(255,255,255,0.16)",

  display: "flex",

  flexDirection: {
    xs: "column",
    md: "row",
  },

  alignItems: "center",
  justifyContent: "space-between",

  gap: {
    xs: 0.7,
    md: 2,
  },
};

const copyright: SxProps<Theme> = {
  color: "primary.contrastText",
  opacity: 0.72,
  fontSize: 12.5,
  textAlign: {
    xs: "center",
    md: "left",
  },
};

const motto: SxProps<Theme> = {
  color: "secondary.main",

  fontSize: 12.5,
  fontWeight: 600,

  textAlign: {
    xs: "center",
    md: "right",
  },

  letterSpacing: "0.025em",
};

export default {
  container,
  copyright,
  motto,
};