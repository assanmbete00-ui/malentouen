import type { SxProps, Theme } from "@mui/material";

const layout: SxProps<Theme> = {
  display: "grid",
  gridTemplateColumns: {
    xs: "1fr",
    md: "minmax(0, 1fr) minmax(0, 1fr)",
  },
  gap: {
    xs: 3,
    md: 8,
  },
  alignItems: "center",
};

const description: SxProps<Theme> = {
  color: "text.secondary",
  fontSize: {
    xs: "0.95rem",
    sm: "1rem",
  },
  maxWidth: 560,
  lineHeight: 1.7,
};

export default {
  layout,
  description,
};
