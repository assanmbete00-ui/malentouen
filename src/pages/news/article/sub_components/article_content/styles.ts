import type { SxProps, Theme } from "@mui/material";

const content: SxProps<Theme> = {
  display: "grid",
  gap: { xs: 3, md: 4 },
  width: "100%",
  margin: "0 auto",
};

const meta: SxProps<Theme> = {
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  gap: 1.5,
  width: "100%",
  maxWidth: 1040,
  mx: "auto",
};

const category: SxProps<Theme> = {
  color: "secondary.dark",
  fontWeight: 700,
  letterSpacing: "0.03em",
  textTransform: "uppercase",
};

const separator: SxProps<Theme> = {
  width: 4,
  height: 4,
  borderRadius: "50%",
  backgroundColor: "secondary.main",
};

const date: SxProps<Theme> = {
  color: "text.secondary",
};

const mediaFrame: SxProps<Theme> = {
  width: "100%",
  maxWidth: 1040,
  mx: "auto",
};

const media: SxProps<Theme> = {
  width: "100%",
  aspectRatio: "16 / 9",
  borderRadius: 1,
  overflow: "hidden",
};

const readingContent: SxProps<Theme> = {
  width: "100%",
  maxWidth: 800,
  mx: "auto",
  display: "grid",
  gap: { xs: 3, md: 4 },
};

const excerpt: SxProps<Theme> = {
  color: "text.primary",
  fontSize: { xs: "1.05rem", md: "1.15rem" },
  lineHeight: 1.8,
};

const footer: SxProps<Theme> = {
  display: "flex",
  justifyContent: "flex-start",
};

export default {
  content,
  meta,
  category,
  separator,
  date,
  mediaFrame,
  media,
  readingContent,
  excerpt,
  footer,
};
