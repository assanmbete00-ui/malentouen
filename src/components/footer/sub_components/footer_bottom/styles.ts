import type { SxProps, Theme } from "@mui/material";

const container: SxProps<Theme> = {
  mt: 6,
  pt: 3,
  borderTop: "1px solid",
  borderColor: "divider",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: .4,
};

const copyright: SxProps<Theme> = {
  color: "primary.contrastText",
  opacity: 0.85,
  fontSize: 13,
  textAlign: "center",
};

const motto: SxProps<Theme> = {
  color: "secondary.main",
  fontSize: 13,
  fontWeight: 500,
  textAlign: "center",
  letterSpacing: "0.04em",
};

export default {
  container,
  copyright,
  motto,
};