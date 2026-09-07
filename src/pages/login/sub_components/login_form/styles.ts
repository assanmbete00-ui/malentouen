import type { SxProps, Theme } from "@mui/material";

const container: SxProps<Theme> = {
  width: "100%",
  maxWidth: 480,
  mx: "auto",
  p: { xs: 0, sm: 2, md: 4 },
};

const eyebrow: SxProps<Theme> = {
  color: "primary.main",
  fontSize: 12,
  fontWeight: 800,
  letterSpacing: "0.16em",
  textTransform: "uppercase",
};

const title: SxProps<Theme> = {
  mt: 1,
  fontSize: { xs: "1.8rem", sm: "2.2rem" },
};

const description: SxProps<Theme> = {
  mt: 1.5,
  color: "text.secondary",
  lineHeight: 1.7,
};

const form: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: 2.5,
  mt: 4,
};

const submit: SxProps<Theme> = {
  mt: 1,
  minHeight: 50,
};

const forgotPassword: SxProps<Theme> = {
  display: "flex",
  justifyContent: "flex-end",
  mt: -1.5,
};

const forgotPasswordLink: SxProps<Theme> = {
  color: "primary.main",
  fontSize: "0.875rem",
  textDecoration: "none",
  "&:hover": { textDecoration: "underline" },
  "&:focus-visible": {
    outline: "2px solid",
    outlineColor: "secondary.main",
    outlineOffset: 3,
  },
};

export default {
  container,
  eyebrow,
  title,
  description,
  form,
  forgotPassword,
  forgotPasswordLink,
  submit,
};
