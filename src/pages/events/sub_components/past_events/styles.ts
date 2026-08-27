import type { SxProps, Theme } from "@mui/material";

const list: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: { xs: 2.5, md: 3 },
};

const item: SxProps<Theme> = {
  display: "grid",
  gridTemplateColumns: { xs: "1fr", md: "minmax(0, 1.1fr) minmax(0, .9fr)" },
  alignItems: "stretch",
};

const media: SxProps<Theme> = {
  width: "100%",
  height: { xs: "auto", md: "100%" },
  minHeight: { xs: 220, md: 280 },
  aspectRatio: { xs: "16 / 10", md: "auto" },
};

const date: SxProps<Theme> = {
  display: "block",
  color: "text.secondary",
  fontSize: { xs: 14, md: 15 },
  fontWeight: 900,
};

const content: SxProps<Theme> = {
  minWidth: 0,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: 1.25,
  p: { xs: 2.5, md: 3.5 },
};

const category: SxProps<Theme> = {
  display: "inline-block",
  color: "secondary.main",
  fontSize: 12,
  fontWeight: 900,
  letterSpacing: ".12em",
  textTransform: "uppercase",
};

const title: SxProps<Theme> = {
  mt: 0.5,
  color: "text.primary",
  fontSize: { xs: 20, md: 24 },
  fontWeight: 900,
  lineHeight: 1.2,
};

const location: SxProps<Theme> = {
  mt: "auto",
  pt: 1,
  color: "text.secondary",
  fontSize: 14,
  lineHeight: 1.6,
};

export default {
  list,
  item,
  media,
  date,
  content,
  category,
  title,
  location,
};
