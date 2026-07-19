import type { SxProps, Theme } from "@mui/material";

const container: SxProps<Theme> = {
  flex: 1,
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "stretch",
  height: "100%",
};

const image: SxProps<Theme> = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "18px",
  display: "block",
  boxShadow: "0 14px 36px rgba(0,0,0,0.08)",
};

export default {
  container,
  image,
};
