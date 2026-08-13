import type { SxProps, Theme } from "@mui/material";
import type { ButtonVariant } from "./types";

const button = (appVariant: ButtonVariant): SxProps<Theme> => ({
  minHeight: 46,
  px: 4,
  borderRadius: 1,
  fontWeight: 700,
  textTransform: "none",
  boxShadow: "none",
  whiteSpace: "nowrap",
  transition:
    "background-color .25s ease, color .25s ease, border-color .25s ease, opacity .25s ease, transform .25s ease, box-shadow .25s ease",

  "&:focus-visible": {
    outline: "2px solid",
    outlineColor: "secondary.main",
    outlineOffset: 3,
  },

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
      bgcolor: "secondary.main",
      opacity: 0.9,
      boxShadow: "none",
    },
  }),

  ...(appVariant === "outline" && {
    bgcolor: "transparent",
    color: "primary.main",
    border: "1px solid",
    borderColor: "primary.main",
    "&:hover": {
      bgcolor: "background.paper",
      color: "primary.dark",
      borderColor: "primary.dark",
      boxShadow: "none",
    },
  }),

  ...(appVariant === "ghost" && {
    bgcolor: "transparent",
    color: "text.primary",
    "&:hover": {
      bgcolor: "background.paper",
      color: "primary.main",
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
