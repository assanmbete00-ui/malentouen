import { Box } from "@mui/material";

import PageBanner from "@components/page_banner";

import useAbout from "./hooks/use_about";

import Identity from "./sub_components/identity";
import History from "./sub_components/history";

import styles from "./styles";

export default function About() {
  const about = useAbout();

  return (
    <Box component="main" sx={styles.root}>
      <PageBanner {...about.banner} />

      <Identity {...about.identity} />

      <History {...about.history} />
    </Box>
  );
}