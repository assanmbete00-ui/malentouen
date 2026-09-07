import type { SxProps, Theme } from "@mui/material";

const container: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
};

const action: SxProps<Theme> = {
  mt: {
    xs: 3,
    md: 4,
  },
  display: "flex",
  justifyContent: {
    xs: "flex-start",
    sm: "flex-end",
  },
};

const actionLink: SxProps<Theme> = {
  color: "text.secondary",
};

export default {
  container,
  action,
  actionLink,
};