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
  gap: { xs: 3.5, md: 4.5 },
};

const article: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  minWidth: 0,
};

const featuredArticle: SxProps<Theme> = {
  ...article,
  gridColumn: { md: "1 / -1" },
  display: { md: "grid" },
  gridTemplateColumns: { md: "1fr 1fr" },
  alignItems: "center",
  gap: { md: 4.5, lg: 5.5 },
  mt: { md: 0.5 },
};

const media: SxProps<Theme> = {
  width: "100%",
  aspectRatio: "16 / 10",
  borderRadius: 1.5,
  overflow: "hidden",
};

const featuredMedia: SxProps<Theme> = {
  ...media,
  aspectRatio: { xs: "16 / 10", md: "16 / 9" },
};

const body: SxProps<Theme> = {
  minWidth: 0,
};

const meta: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  gap: 1,
  mt: 2.5,
};

const featuredMeta: SxProps<Theme> = {
  ...meta,
  mt: { xs: 2.5, md: 0 },
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
  fontSize: { xs: 20, md: 23, lg: 25 },
  fontWeight: 900,
  lineHeight: 1.35,
};

const featuredTitle: SxProps<Theme> = {
  ...title,
  fontSize: { xs: 20, md: 24, lg: 26 },
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
  featuredArticle,
  media,
  featuredMedia,
  body,
  meta,
  featuredMeta,
  category,
  date,
  title,
  featuredTitle,
  excerpt,
  link,
};