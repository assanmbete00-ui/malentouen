import type {
  SxProps,
  Theme,
} from "@mui/material";

const list: SxProps<Theme> = {
  width: "100%",

  borderBottom: "1px solid",
  borderColor: "divider",
};

const item: SxProps<Theme> = {
  display: "grid",

  gridTemplateColumns: {
    xs: "1fr",
    md: "1fr auto",
  },

  alignItems: "center",

  gap: {
    xs: 3,
    md: 5,
  },

  py: {
    xs: 3.5,
    md: 4.5,
  },

  borderTop: "1px solid",
  borderColor: "divider",
};

const content: SxProps<Theme> = {
  display: "grid",

  gridTemplateColumns: {
    xs: "1fr",
    lg: "0.75fr 1.25fr",
  },

  alignItems: "start",

  gap: {
    xs: 1.5,
    md: 3,
    lg: 6,
  },
};

const title: SxProps<Theme> = {
  color: "text.primary",
};

const description: SxProps<Theme> = {
  maxWidth: 680,

  color: "text.secondary",
};

const link: SxProps<Theme> = {
  display: "inline-flex",
  alignItems: "center",

  gap: 1,

  color: "secondary.dark",

  fontSize: 14,
  fontWeight: 800,

  textDecoration: "none",

  whiteSpace: "nowrap",

  transition:
    "color 0.2s ease, transform 0.2s ease",

  "&:hover": {
    color: "secondary.main",
    transform: "translateX(4px)",
  },

  "&:focus-visible": {
    outline: "2px solid",
    outlineColor: "secondary.main",
    outlineOffset: 4,
  },
};

const icon: SxProps<Theme> = {
  fontSize: 18,
};

export default {
  list,
  item,
  content,
  title,
  description,
  link,
  icon,
};