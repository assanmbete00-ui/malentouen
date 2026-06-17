import type { SxProps, Theme } from "@mui/material";

const drawerPaper: SxProps<Theme> = {
  width: 320,
  maxWidth: "85vw",
  bgcolor: "background.paper",
};

const container: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  height: "100%",
};

export default {
  drawerPaper,
  container,
};