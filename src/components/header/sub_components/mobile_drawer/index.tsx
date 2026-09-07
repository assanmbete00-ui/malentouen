import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";

import DrawerHeader from "./sub_components/drawer_header";
import DrawerNavigation from "./sub_components/drawer_navigation";
import DrawerLanguage from "./sub_components/drawer_language";
import DrawerAdmin from "./sub_components/drawer_admin";
import DrawerFooter from "./sub_components/drawer_footer";

import styles from "./styles";
import type { MobileDrawerProps } from "./types";

export default function MobileDrawer({
  open,
  onClose,
  navigation,
  currentLanguage,
  onLanguageChange,
  showLanguageSelector,
  showAdminButton,
  labels,
}: MobileDrawerProps) {
  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: styles.drawerPaper,
      }}
    >
      <Box sx={styles.container}>
        <DrawerHeader />

        <DrawerNavigation items={navigation} onItemClick={onClose} />

        {showLanguageSelector && (
          <DrawerLanguage
            currentLanguage={currentLanguage}
            onLanguageChange={onLanguageChange}
            title={labels.language}
            frenchLabel={labels.french}
            englishLabel={labels.english}
          />
        )}

        {showAdminButton && (
          <DrawerAdmin onClick={onClose} label={labels.admin} />
        )}

        <DrawerFooter />
      </Box>
    </Drawer>
  );
}
