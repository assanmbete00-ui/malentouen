import type { SxProps, Theme } from "@mui/material";

const wrapper: SxProps<Theme> = {
  mt: {
    xs: 5,
    md: 6,
  },

  borderTop: "1px solid",
  borderBottom: "1px solid",
  borderColor: "divider",
};

const grid: SxProps<Theme> = {
  display: "grid",

  gridTemplateColumns: {
    xs: "1fr",
    sm: "repeat(2, minmax(0, 1fr))",
    lg: "repeat(4, minmax(0, 1fr))",
  },
};

const item: SxProps<Theme> = {
  minWidth: 0,

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  textAlign: "center",
  textDecoration: "none",
  color: "inherit",

  px: {
    xs: 3,
    md: 4,
  },

  py: {
    xs: 4,
    md: 5,
  },

  borderBottom: {
    xs: "1px solid",
    sm: "none",
  },

  borderRight: {
    xs: "none",
    sm: "1px solid",
  },

  borderColor: "divider",

  transition:
    "background-color 0.25s ease, color 0.25s ease",

  "&:hover": {
    bgcolor: "background.default",
  },

  "&:focus-visible": {
    outline: "2px solid",
    outlineColor: "secondary.main",
    outlineOffset: "-2px",
  },

  "&:nth-of-type(2n)": {
    borderRight: {
      sm: "none",
      lg: "1px solid",
    },
  },

  "&:last-of-type": {
    borderRight: "none",
    borderBottom: "none",
  },

  "&:nth-last-of-type(2)": {
    borderBottom: {
      sm: "none",
    },
  },
};

const logoWrapper: SxProps<Theme> = {
  minHeight: 64,

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const logo: SxProps<Theme> = {
  maxWidth: 132,
  maxHeight: 58,

  width: "auto",
  height: "auto",

  objectFit: "contain",

  filter: "grayscale(1)",
  opacity: 0.68,

  transition:
    "filter 0.25s ease, opacity 0.25s ease, transform 0.25s ease",

  "a:hover &": {
    filter: "grayscale(0)",
    opacity: 1,
    transform: "translateY(-2px)",
  },
};

const content: SxProps<Theme> = {
  mt: 2.5,
};

const name: SxProps<Theme> = {
  color: "text.primary",

  fontSize: {
    xs: 16,
    md: 17,
  },

  fontWeight: 800,
  lineHeight: 1.4,
};

const type: SxProps<Theme> = {
  mt: 0.75,

  color: "text.secondary",

  fontSize: 13,
  fontWeight: 500,
  lineHeight: 1.55,
};

export default {
  wrapper,
  grid,
  item,
  logoWrapper,
  logo,
  content,
  name,
  type,
};