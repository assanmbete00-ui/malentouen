import type { SxProps, Theme } from "@mui/material";

const content: SxProps<Theme> = {
  display: "grid",
  gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" },
  gap: { xs: 3, lg: 6 },
};

const group: SxProps<Theme> = {
  minWidth: 0,
  borderTop: "1px solid",
  borderColor: "divider",
  pt: 3,
};

const label: SxProps<Theme> = {
  mb: 2,
  color: "text.primary",
  fontSize: 14,
  fontWeight: 800,
};

const options: SxProps<Theme> = {
  display: "flex",
  flexWrap: "wrap",
  gap: 1.25,
  m: 0,
  p: 0,
  listStyle: "none",
};

const option: SxProps<Theme> = {
  px: 2,
  py: 1,
  border: "1px solid",
  borderColor: "divider",
  borderRadius: 999,
  color: "text.secondary",
  bgcolor: "background.default",
  fontSize: 14,
  fontWeight: 700,
};

const action: SxProps<Theme> = {
  mt: { xs: 3.5, md: 4 },
  color: "primary.main",
};

export default { content, group, label, options, option, action };