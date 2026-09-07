import type { SxProps, Theme } from "@mui/material";
import { ADMIN_SIDEBAR_WIDTH } from "@design/tokens/layout";
import { motion } from "@design/tokens/motion";

export const drawer: SxProps<Theme> = {
  display: { xs: "block", lg: "none" },
  "& .MuiDrawer-paper": {
    width: ADMIN_SIDEBAR_WIDTH,
    transition: `transform ${motion.slow} ${motion.easing}`,
  },
};
