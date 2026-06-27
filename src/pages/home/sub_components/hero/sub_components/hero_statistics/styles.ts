import type { SxProps, Theme } from "@mui/material";

const container: SxProps<Theme> = {
  display: "grid",
  gridTemplateColumns: {
    xs: "1fr",
    sm: "repeat(3, 1fr)",
  },
  gap: {
    xs: 3,
    md: 5,
  },
  mt: {
    xs: 5,
    md: 7,
  },
  maxWidth: 820,
};

const item: SxProps<Theme> = {
  position: "relative",
  pr: {
    sm: 3,
  },

  "&:not(:last-of-type)::after": {
    content: '""',
    display: {
      xs: "none",
      sm: "block",
    },
    position: "absolute",
    top: "12%",
    right: 0,
    width: "1px",
    height: "76%",
    bgcolor: "secondary.main",
    opacity: 0.5,
  },
};

const value: SxProps<Theme> = {
  color: "secondary.main",
  fontSize: {
    xs: 34,
    md: 44,
  },
  fontWeight: 900,
  lineHeight: 1,
};

const label: SxProps<Theme> = {
  mt: 1,
  color: "primary.contrastText",
  opacity: 0.88,
  fontSize: 14,
  fontWeight: 700,
  letterSpacing: "0.06em",
  textTransform: "uppercase",
};

export default {
  container,
  item,
  value,
  label,
};