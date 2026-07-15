import type { SxProps, Theme } from "@mui/material";

const root: SxProps<Theme> = {
  display: "grid",
  width: "100%",
  maxWidth: 1120,
  gridTemplateColumns: {
    xs: "1fr",
    md: "repeat(2, 1fr)",
    lg: "repeat(3, 1fr)",
  },
  gridAutoRows: "1fr",
  gap: { xs: 3, md: 4 },
  mt: 0,
};

const card: SxProps<Theme> = {
  height: "100%",
  borderRadius: "16px",
  border: "1px solid",
  borderColor: "divider",
  boxShadow: "0 18px 42px rgba(0,0,0,.06)",
  overflow: "hidden",
};

export default {
  root,
  card,
};
