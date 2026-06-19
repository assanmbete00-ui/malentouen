import { alpha } from "@mui/material";
import type { SxProps, Theme } from "@mui/material";

import { SECONDARY } from "@constants/colors";

const button = (compact: boolean): SxProps<Theme> => ({
  width: compact ? 40 : 46,
  height: compact ? 40 : 46,
  minWidth: 0,
  borderRadius: "50%",
  color: "text.primary",
  transition: "all .25s ease",

  "&:hover": {
    bgcolor: alpha(SECONDARY, 0.12),
    color: "secondary.main",
    transform: "translateY(-2px)",
  },
});

export default {
  button,
};
