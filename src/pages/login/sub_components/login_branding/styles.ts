import type { SxProps, Theme } from "@mui/material";

const container: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: 5,
  minHeight: { xs: "auto", md: 520 },
  py: { xs: 1, md: 3 },
};

const eyebrow: SxProps<Theme> = {
  display: "block",
  mt: { xs: 5, md: 8 },
  color: "secondary.main",
  fontSize: 12,
  fontWeight: 800,
  letterSpacing: "0.16em",
  textTransform: "uppercase",
};

const title: SxProps<Theme> = {
  maxWidth: 480,
  mt: 1.5,
  color: "primary.contrastText",
  fontSize: { xs: "2rem", sm: "2.5rem", md: "3.25rem" },
  lineHeight: 1.08,
};

const description: SxProps<Theme> = {
  maxWidth: 440,
  mt: 2.5,
  color: "primary.contrastText",
  opacity: 0.82,
  lineHeight: 1.8,
};

const backLink: SxProps<Theme> = {
  color: "primary.contrastText",
};

export default { container, eyebrow, title, description, backLink };
