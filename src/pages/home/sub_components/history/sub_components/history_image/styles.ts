import type { SxProps, Theme } from "@mui/material";

const container: SxProps<Theme> = {
  position: "relative",
  width: "100%",
};

const image: SxProps<Theme> = {
  width: "100%",

  aspectRatio: {
    xs: "4 / 3",
    md: "16 / 11",
    lg: "3 / 2",
  },

  objectFit: "cover",
  objectPosition: "center",

  borderRadius: 1.5,

  display: "block",

  border: "1px solid",
  borderColor: "divider",

  boxShadow: "0 16px 36px rgba(0, 0, 0, 0.07)",
};

export default {
  container,
  image,
};