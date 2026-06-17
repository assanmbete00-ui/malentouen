import type { SxProps, Theme } from "@mui/material";

const container: SxProps<Theme> = {
  px: 3,
  py: 2,
  borderTop: "1px solid",
  borderBottom: "1px solid",
  borderColor: "divider",
};

const title: SxProps<Theme> = {
  mb: 1.5,
  fontWeight: 700,
  color: "text.primary",
};

const item = (active: boolean): SxProps<Theme> => ({
  display: "flex",
  alignItems: "center",
  py: 1,
  cursor: "pointer",
  color: active ? "secondary.main" : "text.secondary",
  fontWeight: active ? 700 : 500,
  transition: "all .2s ease",

  "&:hover": {
    color: "secondary.main",
  },
});

export default {
  container,
  title,
  item,
};