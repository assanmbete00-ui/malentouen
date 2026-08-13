import type { SxProps, Theme } from "@mui/material";

const container: SxProps<Theme> = {
  width: "100%",
  alignSelf: "center",
};

const image: SxProps<Theme> = {
  width: "100%",

  height: {
    xs: 420,
    md: 520,
    lg: 580,
  },

  objectFit: "cover",
  objectPosition: "center 55%",

  borderRadius: 1.5,
  display: "block",

  boxShadow: "0 14px 36px rgba(0, 0, 0, 0.08)",
};

export default {
  container,
  image,
};