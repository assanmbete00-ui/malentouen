import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import IconButton from "@mui/material/IconButton";

import styles from "./styles";
import type { MobileButtonProps } from "./types";

export default function MobileButton({
  open = false,
  transparent = false,
  onClick,
  openLabel,
  closeLabel,
}: MobileButtonProps) {
  return (
    <IconButton
      aria-label={open ? closeLabel : openLabel}
      onClick={onClick}
      sx={styles.button(transparent)}
    >
      {open ? <CloseRoundedIcon /> : <MenuRoundedIcon />}
    </IconButton>
  );
}