import type { SxProps, Theme } from "@mui/material";

const container: SxProps<Theme> = {
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 2,
  px: 3,
  bgcolor: "background.default",
  textAlign: "center",
};

const description: SxProps<Theme> = {
  maxWidth: 480,
  color: "text.secondary",
};

const link: SxProps<Theme> = {
  color: "primary.main",
  textDecoration: "none",
  "&:hover": { textDecoration: "underline" },
};

export default { container, description, link };
