import type { SxProps, Theme } from "@mui/material";

const headerAction: SxProps<Theme> = {
  color: "primary.main",
};

const grid: SxProps<Theme> = {
  display: "grid",
  gridTemplateColumns: {
    xs: "1fr",
    md: "repeat(2, minmax(0, 1fr))",
  },
  gap: { xs: 4, md: 5 },
};

const article: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  minWidth: 0,
};

const media: SxProps<Theme> = {
  width: "100%",
  aspectRatio: "16 / 10",
  borderRadius: 1.5,
  overflow: "hidden",
};

const meta: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  gap: 1,
  mt: 2.5,
};

const category: SxProps<Theme> = {
  color: "secondary.dark",
  fontSize: 12,
  fontWeight: 900,
  letterSpacing: ".12em",
  textTransform: "uppercase",
};

const date: SxProps<Theme> = {
  color: "text.secondary",
  fontSize: 13,
  fontWeight: 700,
};

const title: SxProps<Theme> = {
  mt: 1.5,
  color: "text.primary",
  fontSize: { xs: 20, md: 22 },
  fontWeight: 900,
  lineHeight: 1.35,
};

const excerpt: SxProps<Theme> = {
  mt: 1.5,
  color: "text.secondary",
  fontSize: 15,
  lineHeight: 1.8,
};

const link: SxProps<Theme> = {
  mt: 2.5,
  color: "primary.main",
};

export default {
  headerAction,
  grid,
  article,
  media,
  meta,
  category,
  date,
  title,
  excerpt,
  link,
};