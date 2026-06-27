import type { SxProps, Theme } from "@mui/material";

const container: SxProps<Theme> = {
  position: "relative",
  width: "100%",
};

const image: SxProps<Theme> = {
  width: "100%",
  aspectRatio: {
    xs: "4 / 3",
    md: "5 / 4",
  },
  objectFit: "cover",
  borderRadius: 4,
  display: "block",
  border: "1px solid",
  borderColor: "divider",
};

export default {
  container,
  image,
};