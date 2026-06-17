import type { SxProps, Theme } from "@mui/material";

const button: SxProps<Theme> = {
  display: {
    xs: "inline-flex",
    lg: "none",
  },
  width: 44,
  height: 44,
  borderRadius: "50%",
  color: "text.primary",
  bgcolor: "background.paper",
  border: "1px solid",
  borderColor: "divider",

  "&:hover": {
    bgcolor: "action.hover",
    color: "secondary.main",
  },
};

export default {
  button,
};