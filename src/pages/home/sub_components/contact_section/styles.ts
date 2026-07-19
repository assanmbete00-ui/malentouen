import type { SxProps, Theme } from "@mui/material";

const container: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
};

const information: SxProps<Theme> = {
  mt: {
    xs: 5,
    md: 6,
  },
};

const action: SxProps<Theme> = {
  mt: {
    xs: 5,
    md: 6,
  },
};

export default {
  container,
  information,
  action,
};