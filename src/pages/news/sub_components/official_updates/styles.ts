import type { SxProps, Theme } from "@mui/material";

const headerAction: SxProps<Theme> = {
  color: "primary.main",
};

const list: SxProps<Theme> = {
  width: "100%",
  borderBottom: "1px solid",
  borderColor: "divider",
};

const item: SxProps<Theme> = {
  display: "grid",
  gridTemplateColumns: {
    xs: "1fr",
    md: "160px minmax(0, 1fr) auto",
  },
  alignItems: "center",
  gap: { xs: 1.5, md: 3 },
  py: { xs: 2.5, md: 3.5 },
  borderTop: "1px solid",
  borderColor: "divider",
};

const date: SxProps<Theme> = {
  color: "secondary.dark",
  fontSize: 13,
  fontWeight: 800,
};

const content: SxProps<Theme> = {
  minWidth: 0,
};

const title: SxProps<Theme> = {
  color: "text.primary",
  fontSize: { xs: 18, md: 20 },
  fontWeight: 800,
  lineHeight: 1.35,
};

const excerpt: SxProps<Theme> = {
  mt: 1,
  maxWidth: 760,
  color: "text.secondary",
  fontSize: 15,
  lineHeight: 1.75,
};

const link: SxProps<Theme> = {
  display: "inline-flex",
  alignItems: "center",
  gap: 1,
  color: "primary.main",
  fontSize: 14,
  fontWeight: 800,
  textDecoration: "none",
  whiteSpace: { xs: "normal", lg: "nowrap",},

  "&:hover": {
    color: "secondary.dark",
  },

  "&:focus-visible": {
    outline: "2px solid",
    outlineColor: "secondary.main",
    outlineOffset: 3,
  },
};

export default {
  headerAction,
  list,
  item,
  date,
  content,
  title,
  excerpt,
  link,
};