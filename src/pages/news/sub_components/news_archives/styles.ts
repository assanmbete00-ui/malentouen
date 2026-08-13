import type { SxProps, Theme } from "@mui/material";

const content: SxProps<Theme> = {
  display: "grid",
  gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" },
  gap: { xs: 4, lg: 8 },
};

const group: SxProps<Theme> = {
  borderTop: "1px solid",
  borderColor: "divider",
  pt: 3,
};

const label: SxProps<Theme> = {
  color: "text.primary",
  fontSize: 14,
  fontWeight: 800,
  mb: 2,
};

const options: SxProps<Theme> = {
  display: "flex",
  flexWrap: "wrap",
  gap: 1.25,
};

const option: SxProps<Theme> = {
  px: 2,
  py: 1,
  border: "1px solid",
  borderColor: "divider",
  borderRadius: 999,
  color: "text.secondary",
  fontSize: 14,
  fontWeight: 700,
};

const action: SxProps<Theme> = {
  mt: { xs: 4, md: 5 },
  color: "primary.main",
};

export default { content, group, label, options, option, action };