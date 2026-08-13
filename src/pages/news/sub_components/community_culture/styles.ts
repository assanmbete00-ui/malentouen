import type { SxProps, Theme } from "@mui/material";

const headerAction: SxProps<Theme> = {
  color: "primary.main",
};

const layout: SxProps<Theme> = {
  display: "grid",
  gridTemplateColumns: { xs: "1fr", lg: "1.15fr 0.85fr" },
  gap: { xs: 4, md: 5, lg: 6 },
  alignItems: "start",
};

const featured: SxProps<Theme> = {
  height: "100%",
};

const secondaryList: SxProps<Theme> = {
  borderBottom: "1px solid",
  borderColor: "divider",
};

const secondaryItem: SxProps<Theme> = {
  display: "grid",
  gridTemplateColumns: { xs: "120px minmax(0, 1fr)", sm: "180px minmax(0, 1fr)" },
  gap: { xs: 2, sm: 3 },
  py: 3,
  borderTop: "1px solid",
  borderColor: "divider",
};

const media: SxProps<Theme> = {
  width: "100%",
  aspectRatio: "4 / 3",
  borderRadius: 1,
  overflow: "hidden",
};

const content: SxProps<Theme> = {
  minWidth: 0,
};

const meta: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  gap: 1,
};

const category: SxProps<Theme> = {
  color: "secondary.dark",
  fontSize: 11,
  fontWeight: 900,
  letterSpacing: ".1em",
  textTransform: "uppercase",
};

const date: SxProps<Theme> = {
  color: "text.secondary",
  fontSize: 12,
  fontWeight: 700,
};

const title: SxProps<Theme> = {
  mt: 1,
  color: "text.primary",
  fontSize: { xs: 16, sm: 18 },
  fontWeight: 800,
  lineHeight: 1.4,
};

const link: SxProps<Theme> = {
  display: "block",
  height: "100%",
  color: "inherit",
  textDecoration: "none",

  "&:hover h3": {
    color: "primary.main",
  },

  "&:focus-visible": {
    outline: "2px solid",
    outlineColor: "secondary.main",
    outlineOffset: 3,
  },
};

export default {
  headerAction,
  layout,
  featured,
  secondaryList,
  secondaryItem,
  media,
  content,
  meta,
  category,
  date,
  title,
  link,
};