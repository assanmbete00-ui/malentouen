import type { SxProps, Theme } from "@mui/material";

const container: SxProps<Theme> = {
  borderTop: "1px solid",
  borderColor: "divider",
  py: 2.5,
  mt: 4,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 2,
  flexDirection: {
    xs: "column",
    md: "row",
  },
};

const text: SxProps<Theme> = {
  color: "primary.contrastText",
  opacity: 0.82,
  fontSize: 13,
  textAlign: {
    xs: "center",
    md: "left",
  },
};

const credit: SxProps<Theme> = {
  color: "primary.contrastText",
  opacity: 0.72,
  fontSize: 13,
  textAlign: {
    xs: "center",
    md: "right",
  },
};

export default {
  container,
  text,
  credit,
};