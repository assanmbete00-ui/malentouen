import type { SxProps, Theme } from "@mui/material";

const layout: SxProps<Theme> = {
  display: "grid",
  gridTemplateColumns: {
    xs: "1fr",
    md: "1fr 0.9fr",
  },
  gap: { xs: 4, md: 8 },
  alignItems: "center",
};

const content: SxProps<Theme> = {
  maxWidth: 620,
};

const addressBox: SxProps<Theme> = {
  p: { xs: 2.5, sm:3, md: 4 },
  minWidth:0,
  borderRadius: 2,
  bgcolor: "background.paper",
  border: "1px solid",
  borderColor: "divider",
  boxShadow: "0 12px 32px rgba(0, 0, 0, 0.08)",
};

const iconBox: SxProps<Theme> = {
  width: 48,
  height: 48,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 1.5,
  bgcolor: "primary.main",
  color: "primary.contrastText",
  mb: 3,
};

const icon: SxProps<Theme> = {
  fontSize: 26,
};

const label: SxProps<Theme> = {
  mb: 1,
  color: "text.secondary",
  fontSize: "0.875rem",
  fontWeight: 600,
};

const address: SxProps<Theme> = {
  color: "text.primary",
  fontSize: { xs: "1rem", md: "1.1rem" },
  fontWeight: 600,
  lineHeight: 1.6,
};

export default {
  layout,
  content,
  addressBox,
  iconBox,
  icon,
  label,
  address,
};