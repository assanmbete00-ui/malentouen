import type { SxProps, Theme } from "@mui/material";

const container: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
};

const action: SxProps<Theme> = {
  display: "flex",
  justifyContent: "center",

  mt: {
    xs: 5,
    md: 6,
  },
};

export default {
  container,
  action,
};