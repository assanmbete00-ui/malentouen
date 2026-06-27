import type { SxProps, Theme } from "@mui/material";

const container: SxProps<Theme> = {
  flex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const image: SxProps<Theme> = {
  width: "100%",
  maxWidth: 460,
  aspectRatio: "4 / 5",
  objectFit: "cover",
  borderRadius: 4,
  display: "block",

  boxShadow: (theme) => `
    0 24px 60px ${theme.palette.common.black}20 `,
};

export default {
  container,
  image,
};