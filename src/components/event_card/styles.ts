import type { SxProps, Theme } from "@mui/material";

const link: SxProps<Theme> = {
  display: "block",
  height: "100%",
  textDecoration: "none",
  color: "inherit",
};

const content: SxProps<Theme> = {
  p: {
    xs: 2.5,
    md: 3,
  },
};

const titleRow: SxProps<Theme> = {
  display: "flex",
  alignItems: "flex-start",
  gap: 1.5,
};

const marker: SxProps<Theme> = {
  flex: "0 0 auto",
  width: 8,
  height: 8,
  mt: {
    xs: "8px",
    md: "10px",
  },
  borderRadius: "50%",
  bgcolor: "secondary.main",
};

const title: SxProps<Theme> = {
  minWidth: 0,
  color: "text.primary",
  fontSize: {
    xs: 18,
    md: 20,
  },
  fontWeight: 900,
  lineHeight: 1.35,
};

const date: SxProps<Theme> = {
  mt: 1.5,
  color: "secondary.main",
  fontSize: 13,
  fontWeight: 900,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
};

const meta: SxProps<Theme> = {
  mt: 1,
  color: "text.secondary",
  fontSize: 14,
  lineHeight: 1.65,
};

const category: SxProps<Theme> = {
  mt: 1.5,
  display: "inline-block",
  color: "text.secondary",
  fontSize: 12,
  fontWeight: 800,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
};

export default {
  link,
  content,
  titleRow,
  marker,
  title,
  date,
  meta,
  category,
};