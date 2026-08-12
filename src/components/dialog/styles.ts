import type { SxProps, Theme } from "@mui/material";
import type { DialogSize } from "./types";

const maxWidths: Record<
  DialogSize,
  number
> = {
  small: 480,
  medium: 640,
  large: 800,
};

const root: SxProps<Theme> = {
  "& .MuiDialog-container": {
    alignItems: {
      xs: "flex-end",
      sm: "center",
    },
  },
};

const paper = (
  size: DialogSize,
): SxProps<Theme> => ({
  width: {
    xs: "100%",
    sm: `min(100% - 48px, ${maxWidths[size]}px)`,
  },

  maxWidth: maxWidths[size],

  maxHeight: {
    xs: "calc(100% - 24px)",
    sm: "calc(100% - 64px)",
  },

  m: {
    xs: 0,
    sm: 4,
  },

  borderRadius: {
    xs: "20px 20px 0 0",
    sm: 3,
  },

  bgcolor: "background.paper",
  backgroundImage: "none",
  overflow: "hidden",
});

const title: SxProps<Theme> = {
  px: {
    xs: 3,
    sm: 4,
  },

  pt: {
    xs: 3,
    sm: 3.5,
  },

  pb: 2,

  color: "text.primary",

  fontSize: {
    xs: 18,
    sm: 20,
  },

  fontWeight: 800,
  lineHeight: 1.35,
};

const content: SxProps<Theme> = {
  px: {
    xs: 3,
    sm: 4,
  },

  py: 3,
  color: "text.secondary",
};

const contentWithoutTitle: SxProps<Theme> = {
  pt: {
    xs: 3,
    sm: 4,
  },
};

const actions: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  flexWrap: "wrap",

  gap: 1.5,

  px: {
    xs: 3,
    sm: 4,
  },

  py: 2.5,
};

export default {
  root,
  paper,
  title,
  content,
  contentWithoutTitle,
  actions,
};

