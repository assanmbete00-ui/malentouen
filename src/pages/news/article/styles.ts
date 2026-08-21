import type { SxProps, Theme } from "@mui/material";

const media: SxProps<Theme> = {
  width: "100%",
  aspectRatio: "16 / 8",
  borderRadius: 1,
  overflow: "hidden",
};

const meta: SxProps<Theme> = {
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  gap: 1.5,
  color: "text.secondary",
};

const category: SxProps<Theme> = {
  color: "primary.main",
  fontWeight: 700,
};

const separator: SxProps<Theme> = {
  width: 4,
  height: 4,
  borderRadius: "50%",
  backgroundColor: "secondary.main",
};

const content: SxProps<Theme> = {
  display: "grid",
  gap: 3,
  maxWidth: 820,
  margin: "0 auto",
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
  media,
  meta,
  category,
  separator,
  content,
  excerpt,
  footer,
};
