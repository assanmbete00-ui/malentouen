import type { SxProps, Theme } from "@mui/material";

const root: SxProps<Theme> = {
  "& .MuiInputLabel-root": {
    color: "text.secondary",
  },

  "& .MuiOutlinedInput-root": {
    minHeight: 52,
    borderRadius: 1,
    bgcolor: "background.paper",
    transition: "border-color 0.2s ease, box-shadow 0.2s ease",

    "& fieldset": {
      borderColor: "divider",
    },

    "&:hover fieldset": {
      borderColor: "text.secondary",
    },

    "&.Mui-focused fieldset": {
      borderColor: "primary.main",
      borderWidth: 1.5,
    },

    "&.Mui-focused": {
      boxShadow: (theme) =>
        `0 0 0 3px ${theme.palette.primary.main}14`,
    },
  },

  "& .MuiFormHelperText-root": {
    mt: 1,
    mx: 0,
  },

  width:"100",
  minWidth:0,
};

export default { root };