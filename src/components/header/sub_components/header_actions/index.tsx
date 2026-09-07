import { Box } from "@mui/material";

import AdminButton from "../admin_button";
import LanguageSelector from "../language_selector";
import SearchTrigger from "../search_trigger";

import styles from "./styles";
import type { HeaderActionsProps } from "./types";

export default function HeaderActions({
  compact = false,
  showLanguageSelector,
  showSearchButton,
  showAdminButton,
  currentLanguage,
  onLanguageChange,
  labels,
}: HeaderActionsProps) {
  return (
    <Box sx={styles.container}>
      {showSearchButton && (
        <SearchTrigger compact={compact} ariaLabel={labels.search} />
      )}

      {showLanguageSelector && (
        <LanguageSelector
          currentLanguage={currentLanguage}
          onLanguageChange={onLanguageChange}
          frenchLabel={labels.french}
          englishLabel={labels.english}
        />
      )}

      {showAdminButton && (
        <AdminButton compact={compact} label={labels.admin} />
      )}
    </Box>
  );
}
