import type { SxProps, Theme } from "@mui/material";

const root = (isSticky: boolean): SxProps<Theme> => ({
  position: "fixed",
  top: 0,
  zIndex: 1200,
  width: "100%",
  bgcolor: "background.paper",
  boxShadow: isSticky ? 2 : "none",
  transition: "all .25s ease",
});

const main = (isSticky: boolean): SxProps<Theme> => ({
  height: isSticky ? 72 : 88,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  px: { xs: 2, md: 4, lg: 5 },
  transition: "all .25s ease",
  borderBottom: "1px solid",
  borderColor: "divider",
});

const left: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  flexShrink: 0,
};

const center: SxProps<Theme> = {
  flex: 1,
  display: "flex",
  justifyContent: "center",
};

const right: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
};

export default {
  root,
  main,
  left,
  center,
  right,
};