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
  const { isSticky, drawerOpen, toggleDrawer, closeDrawer } = useHeader();

  return (
    <Box component="header" sx={styles.root(isSticky)}>
      {HEADER_CONFIG.SHOW_TOP_BAR && <TopBar />}

      <Box sx={styles.main(isSticky)}>
        <Box sx={styles.left}>
          <Logo variant={isSticky ? "compact" : "default"} />
        </Box>

        <Box sx={styles.center}>
          <DesktopNavigation compact={isSticky} />
        </Box>

        <Box sx={styles.right}>
          <HeaderActions compact={isSticky} />

          <MobileButton open={drawerOpen} onClick={toggleDrawer} />
        </Box>
      </Box>

      <MobileDrawer open={drawerOpen} onClose={closeDrawer} />
    </Box>
  );
}