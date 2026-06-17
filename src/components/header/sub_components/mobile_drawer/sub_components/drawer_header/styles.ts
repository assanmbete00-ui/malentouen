import type { SxProps, Theme } from "@mui/material";

const container: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  px: 3,
  py: 4,
  borderBottom: "1px solid",
  borderColor: "divider",
  bgcolor: "background.paper",
};

const logo: SxProps<Theme> = {
  mb: 2,
};

const title: SxProps<Theme> = {
  fontWeight: 700,
  color: "text.primary",
  lineHeight: 1.3,
};

const subtitle: SxProps<Theme> = {
  mt: 1,
  color: "text.secondary",
  fontSize: 13,
  lineHeight: 1.6,
};

export default {
  container,
  logo,
  title,
  subtitle,
};