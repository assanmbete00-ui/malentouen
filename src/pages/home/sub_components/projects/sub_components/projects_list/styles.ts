import type { SxProps, Theme } from "@mui/material";

const grid: SxProps<Theme> = {
  display: "grid",

  gridTemplateColumns: {
    xs: "1fr",
    md: "repeat(3, 1fr)",
  },

  gap: {
    xs: 4,
    md: 5,
  },

  mt: {
    xs: 6,
    md: 7,
  },
};

const item: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  bgcolor: "background.paper",
  borderRadius: 3,
  border: "1px solid",
  borderColor: "divider",
  p: 4,
  minHeight: 360,
  transition: "transform .3s ease, box-shadow .3s ease",
  boxShadow: "0 18px 34px rgba(0,0,0,0.05)",

  "&:hover": {
    transform: "translateY(-3px)",
    boxShadow: "0 24px 44px rgba(0,0,0,0.08)",
  },
};

const mediaContainer: SxProps<Theme> = {
  width: 120,
  height: 120,
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  bgcolor: "background.paper",
  border: "1px solid",
  borderColor: "divider",
  transition: "all .35s ease",
  mb: 3,

  "&:hover": {
    transform: "translateY(-2px)",
    borderColor: "secondary.main",
  },
};

const image: SxProps<Theme> = {
  width: 56,
  height: 56,
  objectFit: "contain",

  mb: 3,
};

const title: SxProps<Theme> = {
  fontWeight: 700,
  mb: 2,
  color: "text.primary",
};

const description: SxProps<Theme> = {
  color: "text.secondary",
  lineHeight: 1.8,
};

export default {
  grid,
  item,
  mediaContainer,
  image,
  title,
  description,
};
