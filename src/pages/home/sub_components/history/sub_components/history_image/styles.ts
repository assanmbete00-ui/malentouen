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
  boxShadow: "0 18px 42px rgba(0,0,0,.08)",
};

export default {
  container,
  image,
};
