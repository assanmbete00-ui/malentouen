import type { SxProps, Theme } from "@mui/material";

const container: SxProps<Theme> = {
  display: {
    xs: "none",
    lg: "flex",
  },
  alignItems: "center",
  ml: 2,
};

const button = (compact: boolean): SxProps<Theme> => ({
  minWidth: compact ? 120 : 145,
  height: compact ? 42 : 46,
  px: 3,
  borderRadius: 999,
  fontWeight: 700,
  fontSize: 14,
  textTransform: "none",
  boxShadow: "none",
  transition: "all .25s ease",

  "&:hover": {
    transform: "translateY(-1px)",
    boxShadow: 3,
  },
});

export default {
  container,
  button,
};