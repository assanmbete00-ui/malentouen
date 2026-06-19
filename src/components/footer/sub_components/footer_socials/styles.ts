import type { SxProps, Theme } from "@mui/material";

const container: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  gap: 1,
  mt: 2,
};

const button: SxProps<Theme> = {
  width: 42,
  height: 42,
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  bgcolor: "action.hover",
  color: "primary.contrastText",
  opacity: 0.82,
  transition: "all .25s ease",

  "&:hover": {
    bgcolor: "secondary.main",
    transform: "translateY(-2px)",
  },
};

export default {
  container,
  button,
};