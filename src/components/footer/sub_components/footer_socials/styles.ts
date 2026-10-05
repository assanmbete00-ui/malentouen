import type { SxProps, Theme } from "@mui/material";

const container: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  gap: 0.8,
  mt: 0.5,
};

const button: SxProps<Theme> = {
  width: 36,
  height: 36,

  borderRadius: "50%",

  border: "1px solid",
  borderColor: "rgba(255,255,255,0.18)",

  bgcolor: "rgba(255,255,255,0.04)",
  color: "primary.contrastText",

  opacity: 0.86,

  transition:
    "background-color .2s ease, color .2s ease, border-color .2s ease, transform .2s ease",

  "&:hover": {
    opacity: 1,
    bgcolor: "secondary.main",
    color: "primary.main",
    borderColor: "secondary.main",
    transform: "translateY(-2px)",
  },

  "&:focus-visible": {
    outline: "2px solid",
    outlineColor: "secondary.main",
    outlineOffset: 2,
  },
};

export default {
  container,
  button,
};