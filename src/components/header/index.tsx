import { Box } from "@mui/material";

import { HEADER_CONFIG } from "./config/header_config";
import useHeader from "./hooks/use_header";

import Logo from "@components/logo";
import TopBar from "./sub_components/top_bar";
import DesktopNavigation from "./sub_components/desktop_navigation";
import HeaderActions from "./sub_components/header_actions";
import MobileButton from "./sub_components/mobile_button";
import MobileDrawer from "./sub_components/mobile_drawer";

import styles from "./styles";

export default function Header() {
  const {
    isSticky,
    drawerOpen,
    toggleDrawer,
    closeDrawer,
    navigation,
    currentLanguage,
    changeLanguage,
    labels,
  } = useHeader();
  const isCompact = isSticky && HEADER_CONFIG.ENABLE_COMPACT_ON_SCROLL;

  return (
    <Box
      component="header"
      sx={styles.root(isSticky && HEADER_CONFIG.ENABLE_SCROLL_SHADOW)}
    >
      {HEADER_CONFIG.SHOW_TOP_BAR && <TopBar />}

      <Box sx={styles.main(isCompact)}>
        <Box sx={styles.left}>
          <Logo variant={isCompact ? "compact" : "default"} />
        </Box>

        <Box sx={styles.center}>
          <DesktopNavigation compact={isCompact} items={navigation} />
        </Box>

        <Box sx={styles.right}>
          <HeaderActions
            compact={isCompact}
            showLanguageSelector={HEADER_CONFIG.SHOW_LANGUAGE_SELECTOR}
            showSearchButton={HEADER_CONFIG.SHOW_SEARCH_BUTTON}
            showAdminButton={HEADER_CONFIG.SHOW_ADMIN_BUTTON}
            currentLanguage={currentLanguage}
            onLanguageChange={changeLanguage}
            labels={labels}
          />

          <MobileButton
            open={drawerOpen}
            onClick={toggleDrawer}
            openLabel={labels.openMenu}
            closeLabel={labels.closeMenu}
          />
        </Box>
      </Box>

      <MobileDrawer
        open={drawerOpen}
        onClose={closeDrawer}
        navigation={navigation}
        currentLanguage={currentLanguage}
        onLanguageChange={changeLanguage}
        showLanguageSelector={HEADER_CONFIG.SHOW_LANGUAGE_SELECTOR}
        showAdminButton={HEADER_CONFIG.SHOW_ADMIN_BUTTON}
        labels={labels}
      />
    </Box>
  );
}
