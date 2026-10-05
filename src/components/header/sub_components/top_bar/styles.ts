import type { SxProps, Theme } from "@mui/material";

const container = (transparent: boolean): SxProps<Theme> => ({
  width: "100%",
  minHeight: 40,
  bgcolor: transparent ? "transparent" : "primary.main",
  color: "primary.contrastText",
  display: { xs: "none", md: "flex" },
  alignItems: "center",

  borderBottom: "1px solid",
  borderColor: transparent ? "rgba(255, 255, 255, 0.16)" : "transparent",

  transition: (theme) =>
    theme.transitions.create(
      ["background-color", "border-color", "color"],
      {
        duration: 300,
        easing: theme.transitions.easing.easeInOut,
      },
    ),
});

const inner: SxProps<Theme> = {
  width: "100%",
  maxWidth: "1920px",
  mx: "auto",
  px: { md: 3, lg: 5 },
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 2,
};

const left: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  gap: 3,
};

const right: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  gap: 2,
};

const infoItem: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  gap: 0.75,
  fontSize: 13,
  opacity: 0.92,
  whiteSpace: "nowrap",
};

const icon = (transparent: boolean): SxProps<Theme> => ({
  fontSize: 16,
  color: transparent ? "inherit" : "secondary.main",
  transition: "color 0.3s ease",
});

const language: SxProps<Theme> = {
  fontSize: 13,
  fontWeight: 700,
  letterSpacing: "0.04em",
};

export default {
  container,
  inner,
  left,
  right,
  infoItem,
  icon,
  language,
};