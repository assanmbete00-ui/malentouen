import type {
  SxProps,
  Theme,
} from "@mui/material";

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
    lg: "1fr auto",
  },

  gap: {
    xs: 2,
    lg: 5,
  },

  alignItems: "center",

  py: {
    xs: 4,
    md: 5,
  },

  borderBottom: "1px solid",
  borderColor: "divider",
};

const content: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",

  gap: 1.5,
};

const title: SxProps<Theme> = {
  color: "text.primary",
};

const description: SxProps<Theme> = {
  maxWidth: 720,

  color: "text.secondary",
};

const link: SxProps<Theme> = {
  mt: {
    xs: 2,
    lg: 0,
  },

  justifySelf: {
    lg: "end",
  },
};

export default {
  list,
  item,
  content,
  title,
  description,
  link,
};