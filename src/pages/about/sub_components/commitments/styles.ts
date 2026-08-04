import type {
  SxProps,
  Theme,
} from "@mui/material";

const list: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",

  gap: {
    xs: 3,
    md: 4,
  },
};

const item: SxProps<Theme> = {
  display: "flex",

  gap: {
    xs: 2,
    md: 3,
  },

  alignItems: "flex-start",

  p: {
    xs: 3,
    md: 4,
  },

  borderLeft: "4px solid",
  borderColor: "secondary.main",

  bgcolor: "background.paper",

  borderRadius: 3,
};

const content: SxProps<Theme> = {
  flex: 1,
};

const title: SxProps<Theme> = {
  color: "text.primary",
};

const description: SxProps<Theme> = {
  mt: 1.5,

  color: "text.secondary",
};

export default {
  list,
  item,
  content,
  title,
  description,
};