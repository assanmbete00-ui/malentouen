import type { SxProps, Theme } from "@mui/material";

const content: SxProps<Theme> = {
  display: "grid",
  gridTemplateColumns: { xs: "1fr", lg: "1.1fr 0.9fr" },
  alignItems: "center",
  gap: { xs: 4, md: 6, lg: 8 },
};

const media: SxProps<Theme> = {
  width: "100%",
  aspectRatio: { xs: "4 / 3", sm: "16 / 10" },
  borderRadius: 1.5,
  overflow: "hidden",
  border: "1px solid",
  borderColor: "divider",
};

const editorial: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  maxWidth: 620,
};

const meta: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  gap: 1.25,
  mb: 2,
};

const category: SxProps<Theme> = {
  color: "secondary.dark",
  fontSize: 12,
  fontWeight: 900,
  letterSpacing: ".12em",
  textTransform: "uppercase",
};

const separator: SxProps<Theme> = {
  width: 4,
  height: 4,
  borderRadius: "50%",
  bgcolor: "divider",
};

const date: SxProps<Theme> = {
  color: "text.secondary",
  fontSize: 13,
  fontWeight: 700,
};

const title: SxProps<Theme> = {
  color: "text.primary",
  fontSize: { xs: 26, sm: 30, md: 34, lg: 38 },
  fontWeight: 900,
  lineHeight: 1.15,
  letterSpacing: "-0.02em",
};

const excerpt: SxProps<Theme> = {
  mt: 2.5,
  color: "text.secondary",
  fontSize: { xs: 15, md: 16 },
  lineHeight: 1.8,
};

const link: SxProps<Theme> = {
  mt: 3.5,
  color: "primary.main",
};

export default {
  content,
  media,
  editorial,
  meta,
  category,
  separator,
  date,
  title,
  excerpt,
  link,
};