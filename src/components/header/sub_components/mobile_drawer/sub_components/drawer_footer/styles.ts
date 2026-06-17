import type { SxProps, Theme } from "@mui/material";

const container: SxProps<Theme> = {
  mt: "auto",
  px: 3,
  py: 2.5,
  borderTop: "1px solid",
  borderColor: "divider",
  textAlign: "center",
};

const text: SxProps<Theme> = {
  fontSize: 12,
  color: "text.secondary",
  lineHeight: 1.6,
};

export default {
  container,
  text,
};
