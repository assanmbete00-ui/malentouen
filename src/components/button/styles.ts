import type { SxProps, Theme } from "@mui/material";
import type { ButtonVariant } from "./types";

const button = (appVariant: ButtonVariant): SxProps<Theme> => ({
  minHeight: 44,
  px: 3,
  borderRadius: 999,
  fontWeight: 700,
  textTransform: "none",
  boxShadow: "none",
  whiteSpace: "nowrap",

  ...(appVariant === "primary" && {
    bgcolor: "primary.main",
    color: "primary.contrastText",
    "&:hover": {
      bgcolor: "primary.dark",
      boxShadow: "none",
    },
  }),

  ...(appVariant === "secondary" && {
    bgcolor: "secondary.main",
    color: "secondary.contrastText",
    "&:hover": {
      bgcolor: "secondary.dark",
      boxShadow: "none",
    },
  }),

  ...(appVariant === "outline" && {
    bgcolor: "transparent",
    color: "primary.main",
    border: "1px solid",
    borderColor: "primary.main",
    "&:hover": {
      bgcolor: "rgba(93, 64, 55, 0.06)",
      boxShadow: "none",
    },
  }),

  ...(appVariant === "ghost" && {
    bgcolor: "transparent",
    color: "text.primary",
    "&:hover": {
      bgcolor: "rgba(93, 64, 55, 0.06)",
      boxShadow: "none",
    },
  }),

  "&.Mui-disabled": {
    opacity: 0.55,
    boxShadow: "none",
  },
});

export default {
  button,
};