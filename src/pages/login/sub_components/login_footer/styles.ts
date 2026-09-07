import type { SxProps, Theme } from "@mui/material";

const container: SxProps<Theme> = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
  gap: 1.5,
  px: 2,
  pb: 2,
  color: "text.secondary",
  fontSize: "0.75rem",
  textAlign: "center",
};

const link: SxProps<Theme> = {
  color: "text.secondary",
  textDecoration: "none",
  "&:hover": { textDecoration: "underline" },
  "&:focus-visible": {
    outline: "2px solid",
    outlineColor: "secondary.main",
    outlineOffset: 3,
  },
};

export default { container, link };
