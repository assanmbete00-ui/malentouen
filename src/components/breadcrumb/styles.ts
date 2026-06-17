import { SxProps, Theme } from "@mui/material";

const container: SxProps<Theme> = {
  py: 2,
};

const link = (isLast: boolean): SxProps<Theme> => ({
  fontSize: 14,
  fontWeight: isLast ? 600 : 500,
  color: isLast ? "text.primary" : "text.secondary",
  textDecoration: "none",
  transition: "0.25s",

  "&:hover": {
    color: "primary.main",
  },
});

export default {
  container,
  link,
};