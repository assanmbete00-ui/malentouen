import type { SxProps, Theme } from "@mui/material";

const container: SxProps<Theme> = {
  height: "100%",
  p: { xs: 2.5, md: 3 },
  borderRadius: 2,
  bgcolor: "background.paper",
  border: "1px solid",
  borderColor: "divider",
  textAlign: "center",
};

const iconWrapper: SxProps<Theme> = {
  width: 48,
  height: 48,
  mx: "auto",
  mb: 1.5,
  borderRadius: "50%",
  bgcolor: "secondary.main",
  color: "primary.main",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const value: SxProps<Theme> = {
  fontSize: { xs: 28, md: 34 },
  fontWeight: 900,
  color: "primary.main",
  lineHeight: 1.1,
};

const label: SxProps<Theme> = {
  mt: 0.8,
  fontSize: 14,
  fontWeight: 800,
  color: "text.primary",
  textTransform: "uppercase",
  letterSpacing: "0.06em",
};

const description: SxProps<Theme> = {
  mt: 1,
  fontSize: 14,
  lineHeight: 1.7,
  color: "text.secondary",
};

export default {
  container,
  iconWrapper,
  value,
  label,
  description,
};