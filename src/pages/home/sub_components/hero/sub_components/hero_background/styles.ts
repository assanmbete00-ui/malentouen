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
  backgroundPosition: "top center",
  backgroundRepeat: "no-repeat",
  bgcolor: "primary.main",
});

export default {
  root,
  image,
};