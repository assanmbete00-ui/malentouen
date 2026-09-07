import type { SxProps, Theme } from "@mui/material";

const root: SxProps<Theme> = {
  "& .MuiOutlinedInput-root": {
    alignItems: "flex-start",
  },

  "& textarea": {
    lineHeight: 1.7,
    resize: "vertical",
  },
};

export default { root };