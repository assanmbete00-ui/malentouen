import type { SxProps, Theme } from "@mui/material";

const container: SxProps<Theme> = {
  mt: {
    xs: 5,
    md: 6,
  },
  height: {
    xs: 260,
    md: 340,
  },
  borderRadius: 3,
  overflow: "hidden",
  bgcolor: "background.paper",
  border: "1px solid",
  borderColor: "divider",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "text.secondary",
  fontWeight: 700,
};

export default {
  container,
};