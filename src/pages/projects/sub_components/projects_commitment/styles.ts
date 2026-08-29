import type { SxProps, Theme } from "@mui/material";

const title: SxProps<Theme> = {
  maxWidth: 720,
};

const layout: SxProps<Theme> = {
  display: "grid",
  gridTemplateColumns: {
    xs: "1fr",
    md: "minmax(0, 1.1fr) minmax(0, 0.9fr)",
  },
  alignItems: "center",
  gap: {
    xs: 4,
    md: 6,
    lg: 8,
  },
};

const principles: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: 0,
  m: 0,
  p: 0,
  listStyle: "none",
};

const principle: SxProps<Theme> = {
  py: {
    xs: 2.5,
    md: 3,
  },
  borderBottom: "1px solid",
  borderColor: "divider",
  "&:first-of-type": {
    pt: 0,
  },
  "&:last-child": {
    pb: 0,
    borderBottom: 0,
  },
};

const principleTitle: SxProps<Theme> = {
  color: "secondary.main",
  fontSize: {
    xs: 17,
    md: 19,
  },
  fontWeight: 900,
  letterSpacing: ".08em",
  textTransform: "uppercase",
};

const principleDescription: SxProps<Theme> = {
  mt: 0.75,
  color: "text.primary",
  fontSize: {
    xs: 16,
    md: 17,
  },
  lineHeight: 1.6,
};

export default {
  title,
  layout,
  principles,
  principle,
  principleTitle,
  principleDescription,
};
