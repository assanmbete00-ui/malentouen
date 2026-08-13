import type { SxProps, Theme } from "@mui/material";

const introduction: SxProps<Theme> = {
  maxWidth: 920,
  mb: { xs: 4, md: 6 },
};

const descriptionSecondary: SxProps<Theme> = {
  mt: 2,
  color: "text.secondary",
};

const grid: SxProps<Theme> = {
  display: "grid",
  gridTemplateColumns: {
    xs: "1fr",
    md: "repeat(2, minmax(0, 1fr))",
  },
  columnGap: { md: 7, lg: 10 },
  rowGap: 0,
  borderBottom: "1px solid",
  borderColor: "divider",
};

const item: SxProps<Theme> = {
  display: "grid",
  gridTemplateColumns: {
    xs: "52px 1fr",
    sm: "64px 1fr",
  },
  gap: { xs: 2, sm: 3 },
  py: { xs: 3.5, md: 4.5 },
  borderTop: "1px solid",
  borderColor: "divider",
};

const number: SxProps<Theme> = {
  color: "secondary.main",
  fontSize: 13,
  fontWeight: 800,
  lineHeight: 1.5,
  letterSpacing: ".12em",
};

const content: SxProps<Theme> = {
  minWidth: 0,
};

const title: SxProps<Theme> = {
  color: "text.primary",
};

const description: SxProps<Theme> = {
  mt: 1.5,
  color: "text.secondary",
};

export default {
  introduction,
  descriptionSecondary,
  grid,
  item,
  number,
  content,
  title,
  description,
};