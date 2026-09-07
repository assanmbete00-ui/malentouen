import type { SxProps, Theme } from "@mui/material";

const wrapper: SxProps<Theme> = {
  mt: {
    xs: 4,
    md: 6,
  },
  mb: {
    xs: 2,
    md: 3,
  },
  overflow: "hidden",
};

const rail: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  width: "max-content",
  animation: "scroll 32s linear infinite",
  willChange: "transform",

  "@keyframes scroll": {
    "0%": {
      transform: "translateX(0)",
    },
    "100%": {
      transform: "translateX(-50%)",
    },
  },

  "@media (prefers-reduced-motion: reduce)": {
    animation: "none",
  },
};

const item: SxProps<Theme> = {
  flex: "0 0 auto",
  width: {
    xs: 136,
    sm: 164,
    md: 194,
  },
  height: {
    xs: 96,
    sm: 112,
    md: 128,
  },
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const logo: SxProps<Theme> = {
  width: {
    xs: 112,
    sm: 140,
    md: 168,
  },
  height: {
    xs: 82,
    sm: 96,
    md: 108,
  },
  objectFit: "contain",
};

const sequence: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  gap: {
    xs: 2,
    sm: 3,
    md: 4,
  },
  width: "max-content",
};

export default {
  wrapper,
  rail,
  item,
  logo,
  sequence,
};