import type { SxProps, Theme } from "@mui/material";

const root: SxProps<Theme> = {
  textAlign: "center",
  borderTopLeftRadius: { xs: 0, md: 18 },
  borderTopRightRadius: { xs: 0, md: 18 },
  mt: { xs: 3, md: 4 },
  pt: { xs: 5, md: 6 },
  pb: { xs: 6, md: 7 },
  mb: 0,
  boxShadow: "0 -12px 40px rgba(0,0,0,0.08)",
  borderTop: "1px solid",
  borderColor: "divider",
};

const actions: SxProps<Theme> = {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: 2,
  mt: {
    xs: 5,
    md: 6,
  },
};

export default {
  root,
  actions,
};
