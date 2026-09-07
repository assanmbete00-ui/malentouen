import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import IconButton from "@mui/material/IconButton";

import styles from "./styles";
import type { SearchTriggerProps } from "./types";

export default function SearchTrigger({
  compact = false,
  onClick,
  ariaLabel,
}: SearchTriggerProps) {
  return (
    <IconButton
      aria-label={ariaLabel}
      onClick={onClick}
      sx={styles.button(compact)}
    >
      <SearchRoundedIcon />
    </IconButton>
  );
}
