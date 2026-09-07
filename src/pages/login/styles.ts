import type { SxProps, Theme } from "@mui/material";

const root: SxProps<Theme> = {
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  bgcolor: "background.default",
};

const layout: SxProps<Theme> = {
  width: "100%",
  maxWidth: 1180,
  mx: "auto",
  px: { xs: 2.5, sm: 4, md: 6 },
  py: { xs: 4, md: 7 },
  display: "grid",
  gridTemplateColumns: { xs: "1fr", md: "minmax(0, 1fr) minmax(0, 1fr)" },
  gap: { xs: 5, md: 9 },
  alignItems: "center",
};

const branding: SxProps<Theme> = {
  minWidth: 0,
  px: { xs: 2, md: 4 },
  py: { xs: 3, md: 5 },
  bgcolor: "primary.main",
};

const form: SxProps<Theme> = {
  minWidth: 0,
};

export default { root, layout, branding, form };
