import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import IconButton from "@mui/material/IconButton";

import styles from "./styles";
import type { MobileButtonProps } from "./types";

export default function MobileButton({ open = false, onClick }: MobileButtonProps) {
  return (
    <IconButton
      aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
      onClick={onClick}
      sx={styles.button}
    >
      {open ? <CloseRoundedIcon /> : <MenuRoundedIcon />}
    </IconButton>
  );
}