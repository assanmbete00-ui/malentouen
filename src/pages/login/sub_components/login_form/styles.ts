import type { SxProps, Theme } from "@mui/material";

const container: SxProps<Theme> = {
  width: "100%",

  maxWidth: {
    xs: "100%",
    sm: 480,
  },

  mx: "auto",

  p: {
    xs: 0,
    sm: 2,
    md: 4,
  },
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

  fontSize: {
    xs: "1.9rem",
    sm: "2.2rem",
  },

  lineHeight: 1.15,
};

const description: SxProps<Theme> = {
  mt: 1.5,

  color: "text.secondary",

  fontSize: {
    xs: 14,
    sm: 15,
  },

  lineHeight: 1.7,
};

const form: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",

  gap: {
    xs: 2,
    sm: 2.5,
  },

  mt: {
    xs: 3,
    sm: 4,
  },
};

const submit: SxProps<Theme> = {
  mt: 0.5,

  width: {
    xs: "100%",
    sm: "auto",
  },

  minHeight: 50,
};

const forgotPassword: SxProps<Theme> = {
  display: "flex",

  justifyContent: {
    xs: "flex-start",
    sm: "flex-end",
  },

  mt: -1,
};

const forgotPasswordLink: SxProps<Theme> = {
  color: "primary.main",

  fontSize: "0.875rem",

  textDecoration: "none",

  "&:hover": {
    textDecoration: "underline",
  },

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