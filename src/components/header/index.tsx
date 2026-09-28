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
    isTransparent,
    drawerOpen,
    toggleDrawer,
    closeDrawer,
    handleMouseEnter,
    handleMouseLeave,
    navigation,
    currentLanguage,
    changeLanguage,
    labels,
  } = useHeader();

  const isCompact = isSticky && HEADER_CONFIG.ENABLE_COMPACT_ON_SCROLL;
  const showShadow = isSticky && HEADER_CONFIG.ENABLE_SCROLL_SHADOW;

  return (
    <Box
      component="header"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      sx={styles.root(isTransparent, showShadow)}
    >
      {HEADER_CONFIG.SHOW_TOP_BAR && (
        <TopBar transparent={isTransparent} />
      )}

      <Box sx={styles.main(isCompact, isTransparent)}>
        <Box sx={styles.left}>
          <Logo
            variant={isCompact ? "compact" : "default"}
            transparent={isTransparent}
          />
        </Box>

        <Box sx={styles.center}>
          <DesktopNavigation
            compact={isCompact}
            transparent={isTransparent}
            items={navigation}
          />
        </Box>

        <Box sx={styles.right}>
          <HeaderActions
            compact={isCompact}
            transparent={isTransparent}
            showLanguageSelector={HEADER_CONFIG.SHOW_LANGUAGE_SELECTOR}
            showSearchButton={HEADER_CONFIG.SHOW_SEARCH_BUTTON}
            showAdminButton={HEADER_CONFIG.SHOW_ADMIN_BUTTON}
            currentLanguage={currentLanguage}
            onLanguageChange={changeLanguage}
            labels={labels}
          />

          <MobileButton
            open={drawerOpen}
            transparent={isTransparent}
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