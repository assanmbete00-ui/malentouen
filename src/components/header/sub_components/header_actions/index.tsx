import { Box } from "@mui/material";

import AdminButton from "../admin_button";
import LanguageSelector from "../language_selector";
import SearchTrigger from "../search_trigger";

import styles from "./styles";
import type { HeaderActionsProps } from "./types";

export default function HeaderActions({
  compact = false,
}: HeaderActionsProps) {
  return (
    <Box sx={styles.container}>
      <SearchTrigger compact={compact} />

      <LanguageSelector compact={compact} />

      <AdminButton compact={compact} />
    </Box>
  );
}