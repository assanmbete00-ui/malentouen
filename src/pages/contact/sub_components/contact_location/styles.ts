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

const addressBox: SxProps<Theme> = {
  p: { xs: 3, md: 4 },
  borderRadius: 3,
  bgcolor: "background.paper",
  border: "1px solid",
  borderColor: "divider",
};

const label: SxProps<Theme> = {
  mb: 1,
  color: "text.secondary",
  fontSize: "0.875rem",
  fontWeight: 600,
};

const address: SxProps<Theme> = {
  color: "text.primary",
  fontSize: { xs: "1.05rem", md: "1.15rem" },
  fontWeight: 600,
  lineHeight: 1.7,
};

const iconBox: SxProps<Theme> = {
  width: 52,
  height: 52,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 2,
  bgcolor: "primary.main",
  color: "primary.contrastText",
  mb: 3,
};

const icon: SxProps<Theme> = {
  fontSize: 28,
};

export default {
  layout,
  addressBox,
  label,
  address,
  iconBox,
  icon,
};