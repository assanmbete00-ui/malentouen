import type { SxProps, Theme } from "@mui/material";

import { HEADER_CONFIG } from "@components/header/config/header_config";

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

  pt: {
    xs: `${HEADER_CONFIG.HEADER_HEIGHT}px`,
    md: `${HEADER_CONFIG.TOP_BAR_HEIGHT + HEADER_CONFIG.HEADER_HEIGHT}px`,
  },
};

export default {
  root,
  content,
  main,
};
