import type { SxProps, Theme } from "@mui/material";

const container: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  gap: 1.4,
  mt: 1,
};

const button: SxProps<Theme> = {
  width: 46,
  height: 46,
  borderRadius: "50%",
  border: "1px solid",
  borderColor: "divider",
  bgcolor: "transparent",
  color: "primary.contrastText",
  opacity: 0.82,
  transition: "all .25s ease",

  "&:hover": {
    opacity: 1,
    bgcolor: "secondary.main",
    color: "primary.main",
    borderColor: "secondary.main",
    transform: "translateY(-3px) scale(1.05)",
  },
};

export default {
  container,
  button,
};