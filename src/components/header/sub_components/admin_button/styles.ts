import type { SxProps, Theme } from "@mui/material";

const container: SxProps<Theme> = {
  display: {
    xs: "none",
    lg: "flex",
  },
  alignItems: "center",
  ml: 2,
};

const button = (
  compact: boolean,
  transparent: boolean,
): SxProps<Theme> => ({
  minWidth: compact ? 120 : 145,
  height: compact ? 42 : 46,
  px: 3,
  borderRadius: 1,
  fontWeight: 700,
  fontSize: 14,
  textTransform: "none",

  color: transparent ? "common.white" : undefined,
  bgcolor: transparent ? "rgba(255,255,255,0.12)" : undefined,
  border: transparent ? "1px solid rgba(255,255,255,0.28)" : undefined,
  backdropFilter: transparent ? "blur(8px)" : "none",

  boxShadow: "none",

  transition: (theme) =>
    theme.transitions.create(
      ["background-color", "color", "border-color", "box-shadow", "transform"],
      {
        duration: 250,
        easing: theme.transitions.easing.easeInOut,
      },
    ),

  "&:hover": {
    transform: "translateY(-1px)",
    boxShadow: transparent ? "none" : 3,
    bgcolor: transparent ? "rgba(255,255,255,0.2)" : undefined,
  },
});

export default {
  container,
  button,
};