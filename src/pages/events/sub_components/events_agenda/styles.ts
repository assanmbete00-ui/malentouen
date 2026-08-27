import type { SxProps, Theme } from "@mui/material";

const list: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  borderTop: "1px solid",
  borderColor: "divider",
};

const item: SxProps<Theme> = {
  display: "grid",
  gridTemplateColumns: {
    xs: "1fr",
    md: "180px minmax(0, 1fr) 220px",
  },
  gap: {
    xs: 2,
    md: 4,
  },

  py: {
    xs: 3,
    md: 4,
  },

  borderBottom: "1px solid",
  borderColor: "divider",
};

const dateColumn: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
};

const date: SxProps<Theme> = {
  color: "secondary.main",
  fontSize: {
    xs: 14,
    md: 15,
  },
  fontWeight: 900,
  letterSpacing: ".08em",
  textTransform: "uppercase",
};

const category: SxProps<Theme> = {
  display: "inline-block",
  mt: 1,

  color: "text.secondary",
  fontSize: 11,
  fontWeight: 800,
  letterSpacing: ".12em",
  textTransform: "uppercase",
};

const content: SxProps<Theme> = {
  minWidth: 0,
};

const title: SxProps<Theme> = {
  color: "text.primary",
  fontSize: {
    xs: 19,
    md: 22,
  },
  fontWeight: 900,
  lineHeight: 1.35,
};

const meta: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: {
    xs: "flex-start",
    md: "flex-end",
  },
  justifyContent: "center",

  gap: 0.75,

  color: "text.secondary",
  fontSize: 14,
  lineHeight: 1.6,

  textAlign: {
    xs: "left",
    md: "right",
  },
};

const time: SxProps<Theme> = {
  color: "text.primary",
  fontWeight: 800,
};

const location: SxProps<Theme> = {
  color: "text.secondary",
};

export default {
  list,
  item,
  dateColumn,
  date,
  category,
  content,
  title,
  meta,
  time,
  location,
};