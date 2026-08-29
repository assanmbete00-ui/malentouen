import type { SxProps, Theme } from "@mui/material";

const root: SxProps<Theme> = {
  "& .MuiOutlinedInput-root": {
    borderRadius: 2,
    bgcolor: "background.paper",
  },
};

export default { root };