import type { SxProps, Theme } from "@mui/material";

const content: SxProps<Theme> = {
  display: "grid",

  gridTemplateColumns: {
    xs: "1fr",
    lg: "0.9fr 1.1fr",
  },

  gap: {
    xs: 5,
    md: 7,
    lg: 9,
  },

  alignItems: "start",
};

const list: SxProps<Theme> = {
  width: "100%",

  borderBottom: "1px solid",
  borderColor: "divider",
};

const item: SxProps<Theme> = {
  display: "grid",

  gridTemplateColumns: {
    xs: "56px 1fr",
    sm: "72px 1fr",
  },

  gap: {
    xs: 2,
    sm: 3,
  },

  py: {
    xs: 3,
    md: 4,
  },

  borderTop: "1px solid",
  borderColor: "divider",
};

const number: SxProps<Theme> = {
  color: "secondary.main",

  fontSize: {
    xs: 13,
    md: 14,
  },

  fontWeight: 800,
  lineHeight: 1.5,
  letterSpacing: ".12em",
};

const itemContent: SxProps<Theme> = {
  minWidth: 0,
};

const itemTitle: SxProps<Theme> = {
  color: "text.primary",
};

const itemDescription: SxProps<Theme> = {
  maxWidth: 620,

  mt: 1.5,

  color: "text.secondary",
};

const visual: SxProps<Theme> = {
  position: {
    lg: "sticky",
  },

  top: {
    lg: 120,
  },

  width: "100%",
};

const media: SxProps<Theme> = {
  width: "100%",

  aspectRatio: {
    xs: "4 / 3",
    sm: "16 / 10",
    lg: "4 / 5",
  },

  borderRadius: 4,

  border: "1px solid",
  borderColor: "divider",

  bgcolor: "background.paper",
};

export default {
  content,

  list,
  item,
  number,
  itemContent,
  itemTitle,
  itemDescription,

  visual,
  media,
};