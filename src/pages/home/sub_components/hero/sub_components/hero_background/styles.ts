import type { SxProps, Theme } from "@mui/material";

const root: SxProps<Theme> = {
  position: "absolute",
  inset: 0,
  zIndex: 0,
  overflow: "hidden",
};

const image = (background: string): SxProps<Theme> => ({
  width: "100%",
  height: "100%",

  backgroundImage: `url(${background})`,
  backgroundSize: "cover",

  backgroundPosition: {
    xs: "58% center",
    md: "center 42%",
    lg: "center 40%",
  },

  backgroundRepeat: "no-repeat",
  bgcolor: "primary.main",

  transform: "scale(1.01)",
});

export default {
  root,
  image,
}; 
