import type { SxProps, Theme } from "@mui/material";

const root: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  minHeight: "100vh",
};

const content: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  flex: 1,
  width: "100%",
};

const main: SxProps<Theme> = {
  flex: 1,
  width: "100%",
  overflowX: "hidden",
  overflowY: "visible",
};

export default {
  root,
  content,
  main,
};