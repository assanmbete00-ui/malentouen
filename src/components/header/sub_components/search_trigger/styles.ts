import type { SxProps, Theme } from "@mui/material";

const button = (compact: boolean): SxProps<Theme> => ({
  width: compact ? 40 : 46,
  height: compact ? 40 : 46,
  minWidth: 0,
  borderRadius: "50%",
  color: "text.primary",
  transition: "all .25s ease",

  "&:hover": {
    bgcolor: "rgba(200,155,60,0.12)",
    color: "secondary.main",
    transform: "translateY(-2px)",
  },
});

export default {
  button,
};